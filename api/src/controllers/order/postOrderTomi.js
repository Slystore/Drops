const { Product, Users, OrderDetail, Orders } = require("../../db.js");

const postOrderTomi = async (req, res, next) => {
    try {
      const {
        products,
        userId
      } = req.body;
//   console.log(products, userId);//[ { ProductId: 1, quantity: 2 } ] 1
      //Se busca la orden por userId y que sea orderState 'CART'
      const order = await Orders.findOne({
        where: {
          UserId: userId,
          status: 'inCart',
        }
      });
      console.log(order, "tomi")
      //Si la order no existe, se crea y se retorna el orderId
      if (!order) {
        //Crea la orden
      
        const order2 = await Orders.create({ userId });
        //Busca el usuario por userId
        const user = await Users.findByPk(userId);
        //Asocia user a la order
        user.addOrders(order2);
        //Recorre los productos que vienen por body
  
        products?.forEach(async product => {
          //Busca el producto por productId
          const productData = await Product.findByPk(product.productId);
          //Asocia product a la order, con la cantidad y el precio (de la DB);
          console.log(productData, "productData")
          order2.addProduct(productData, {
            through: {
              quantity: product.quantity,
              price: productData.price
            }
          });
        });
        return res.json({
          status: `${order2.status}`,
          message: true,
          cartId: `${order2.id}`
        });
        //Si la orden existe se fusiona
      } else res.json({
        status: `${order.status}`,
        message: false,
        cartId: `${order.id}`
      })
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  
  
  module.exports =  postOrderTomi;