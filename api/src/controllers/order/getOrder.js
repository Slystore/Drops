const { Orders } = require('../../db.js');

const getOrders = async (req, res) => {
    try {
     

        //busqueda de query por el status 
        const { status } = req.query;
        if (status) {
            // status.toLowerCase().trim();
            let orderByStatus = await Orders.findAll({
                where: {
                    status: status
                    // {
                    //     [Op.iLike]: `%${status}%`,
                    // },
                },
            });
            if (orderByStatus) return res.status(200).json(orderByStatus);
        }
        const orders = await Orders.findAll({});
        res.status(200).json(orders);
    } catch (err) {
        console.log(err);
    }
};
module.exports = getOrders; 