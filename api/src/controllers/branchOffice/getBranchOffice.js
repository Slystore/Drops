const { BranchOffice } = require("../../db.js");

const getBranchOffice = async (req, res) => {
        try {
            const branchOffice = await BranchOffice.findAll({});
            res.status(200).json(branchOffice);
        }catch(err){
            console.log(err);
            res.status(500).send({
                message: "Error al obtener sucursal"
            });
        }
};

module.exports = { getBranchOffice };
