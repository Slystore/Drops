const { OrderDetail } = require("../../../db.js");
const { orderDetailData } = require("./orderDetailData.js");

const orderDetailLogicData = async () => {
  for (let item of orderDetailData) {
    await OrderDetail.create({
        price: item.price,
        quantity: item.quantity,
        sizeId: item.sizeId,
        ProductId: item.ProductId,
        OrderId: item.OrderId
    });
  }
};

module.exports = { orderDetailLogicData };
