const { Category } = require("../../db.js");
const { Op } = require("sequelize");

const getCategories = async (req, res, next) => {
  try {
    //get by id
    const { id } = req.params;
    if (id) {
      let categoryId = await Category.findOne({
        where: {
          id,
        },
      });
      if (categoryId) {
        return res.status(200).json(categoryId);
      }
    }
    const { name } = req.query;
    if (name) {
      name.toLowerCase().trim();
      let categoryName = await Category.findOne({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
      });
      if (categoryName) {
        return res.status(200).json(categoryName);
      } else {
        return res
          .status(404)
          .json({ msg: "No se ha encontrado esta categoria" });
      }
    }

    //get all
    const allCategories = await Category.findAll({});
    return res.status(200).json(allCategories);
  } catch (err) {
    next(err);
  }
};

module.exports = getCategories;
