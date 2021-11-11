const { Order, Payment_detail, Order_products, Product, User } = require("../../db");
const { FRONT, GMAIL_APP_EMAIL } = process.env;
const { transporter } = require("../../utils/nodemailer");
const mercadopago = require("../../utils/mercadopago/configure");

module.exports = async (req, res, next) => {
  res.status(200).json(); // sends status 200 required by Mercadopago
  
  try {
    const { data } = req.body;

    //gets the payments details from Mercadopago's API
    const response = await mercadopago.get(`/v1/payments/${data.id}`);

    const payment_id = parseInt(response.body.id);
    const payment_status = response.body.status;
    const external_reference = parseInt(response.body.external_reference);

    //updates or creates the payment in database with the info requested
    let payment = await Payment_detail.findOne({
      where: {
        payment_id 
      }
    });

    if(payment) {
      payment.payment_status = payment_status
      payment.save();
    } else {
      payment = await Payment_detail.create({
        payment_status,
        payment_id,
        orderId: external_reference,
        name: "mercadopago"
      });
      //associates the new payment instance with the order
      await payment.setOrder(external_reference);
    }

    const order = await Order.findOne({
      where: {
        id: external_reference
      },
      include: [Order_products, User]
    });

    if(payment_status === "rejected") {
      //rejected payment case
      if(order.status !== "cancelled" && order.status !== "pending") {
        //increments the stock according to the products purchased in the order
        order.order_products.forEach(async (product) => {
          await Product.increment({
            stock: product.units
          }, {
            where: {
              id: product.productId
            }
          });
        });
      }

      if(order.status !== "cancelled") {
        //sends an email to the user notifiying about the issue
        transporter.sendMail({
          from: `"On The Rocks" <${GMAIL_APP_EMAIL}>`, // sender address
          to: order.user.email, // list of receivers
          subject: "Order cancelled", // Subject line
          text: "The payment has been rejected, please try again", // plain text body
          html: `<b>click on the link to see your order: <a href="${FRONT}/order/${order.id}"> HERE </a> </b>`, // html body
        });
      }
      
      order.status = "cancelled";
      order.save();

    } else if(payment_status === "approved") {
      //approved payment case
      if(order.status !== "created" && order.status !== "completed") {
        if(order.total > 499) {
          /* 
            gives to the user a reward coin if the 
            total amount of the order is greater than 499
          */
          const user = await User.findOne({
            where: { id : order.userId },
          });
    
          user.coins += 1;
          user.save();
        }
        //sends an email to the user notifying of successful payment
        transporter.sendMail({
          from: `"On The Rocks" <${GMAIL_APP_EMAIL}>`, // sender address
          to: order.user.email, // list of receivers
          subject: "Order successfully created", // Subject line
          text: "The payment is done and we received your order, we will be working on it from now, Thank you!", // plain text body
          html: `<b>click on the link to see your order: <a href="${FRONT}/order/${order.id}"> HERE </a> </b>`, // html body
        });
      }

      if(order.status === "processing") {
        order.status = "created";
        order.save();
      } else {
        /*
          decreases the stock in database in case the order 
          gets approved directly without processing 
        */
        order.order_products.forEach(async (product) => {
          await Product.decrement({
            stock: product.units
          }, {
            where: {
              id: product.productId
            }
          });
        });
        
        order.status = "created";
        order.save();
      }
      
    } else {
      //in-process payment case
      if(order.status === "pending") {
        /*
          decreases the stock in database according to 
          the products purchased in the order
        */
        order.order_products.forEach(async (product) => {
          await Product.decrement({
            stock: product.units
          }, {
            where: {
              id: product.productId
            }
          });
        });
      }

      order.status = "processing";
      order.save();
    }

    return res.status(200).send();
  } catch (err) {
    next(err);
    return res.status(409).send(err);
  }
};