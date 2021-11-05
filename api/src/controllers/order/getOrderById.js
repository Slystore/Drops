const {Orders} = require('../../db.js');

const getOrderById = async (req, res) => {
    try{
        const order = await Orders.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(order);
    }catch(err){
        console.log(err);
    }
}
module.exports = getOrderById;