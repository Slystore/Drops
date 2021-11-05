const {Orders} = require('../../db.js');

const getOrders = async (req, res) => {
    try {
        const orders = await Orders.findAll({});
        res.status(200).json(orders);
    }catch(err){
        console.log(err);
    }
};
module.exports = getOrders; 