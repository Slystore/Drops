const {Orders, Product, Users} = require('../../db.js');

const getOrderById = async (req, res) => {
     try{
    //     const order = await Orders.findOne({
    //         where: {
    //             id: req.params.id
    //         }
    //     });
    const { id } = req.params;
    const order = await Orders.findByPk(id,
      {
        include: [
          {
            model: Users,
            attributes: ["id", "name", "surname", "mail"]
          },
          {
            model: Product,
            attributes: ["id", "name", "price", "image"]
          }
        ]
      });
    if (!order) {
      return res.status(404).json({
        message: "order id: " + id + " not found"
      });
    } else {
      return res.json(order);;
    }
  } catch (error) {
    console.log(error);
  }
}
//         res.status(200).json(order);
//     }catch(err){
//         console.log(err);
//     }
// }
module.exports = getOrderById;