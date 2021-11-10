const {OrderDetail} = require('../../db.js');

const getOrderDetailById = async (req, res) => {
    const {id} = req.params;
    try {
        const orderDetail = await OrderDetail.findAll({
            where: {
                OrderId: id
            }
        });
        res.json(orderDetail);
    } catch (error) {
        res.json(error);
    }
}
module.exports = getOrderDetailById;
