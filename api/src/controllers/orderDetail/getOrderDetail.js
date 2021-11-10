const {OrderDetail} = require('../../db.js');

const getAllOrderDetails = async (req, res) => {
    try {
        const orderDetail = await OrderDetail.findAll();
        res.json(orderDetail);
    } catch (error) {
        res.json(error);
    }
}
module.exports = getAllOrderDetails;
