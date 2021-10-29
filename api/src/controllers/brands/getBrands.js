const { Op } = require("sequelize");
const { Brand } = require("../../db.js");

const getBrands = async (req, res, next) => {
  try {
    //get por id
    const { id } = req.params;
    if (id) {
      let brandOne = await Brand.findOne({
        where: {
          id: id,
        },
        atributtes: ["name", "id"],
      });
      if (brandOne) {
        return res.status(200).json(brandOne);
      } else {
        return res
          .status(404)
          .json({ msg: "No se a encontrado una marca con ese id" });
      }
    }
    //get por query
    const { name } = req.query;
    if (name) {
      name.toLowerCase().trim();
      let brandName = await Brand.findOne({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
      });
      if (brandName) return res.status(200).json(brandName);
      else
        return res
          .status(404)
          .json({ msg: "No se a encontrado el nombre de la marca buscada" });
    }

    //get all
    const allBrands = await Brand.findAll({});
    return res.status(200).json(allBrands);
  } catch (err) {
    next(err);
  }
};

module.exports = getBrands;
