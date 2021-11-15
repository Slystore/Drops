const { Orders } = require('../../db.js');

const getOrders = async (req, res) => {
    try {
        const orders = await Orders.findAll({});
        res.status(200).json(orders);


        //busqueda de query por el status 
        const { status } = req.query;
        if (status) {
            status.toLowerCase().trim();
            let orderByStatus = await Orders.findOne({
                where: {
                    status: {
                        [Op.iLike]: `%${status}%`,
                    },
                },
            });
            if (orderByStatus) return res.status(200).json(orderByStatus);
            else
                return res
                    .status(404)
                    .json({ msg: "No se a encontrado el status de la orden " });
        }
    } catch (err) {
        console.log(err);
    }
};
module.exports = getOrders; 