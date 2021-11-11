const { Category } = require("../../db");
const editCategory = async (req, res) => {
  let data = req.body;
  const id = req.body.id;
  try {
    let newCategory = await Category.update(data, {
      where: {
        id
      },
    });
    let categoryUpdate = await Category.findOne({
      where: {
        id
      },
    });
    newCategory[0] !== 0
      ? res.status(200).json(categoryUpdate)
      : res
        .status(400)
        .json({
          msg: "No se a podido actualizar la category intente de nuevo",
        });
  } catch (error) {
    console.log("rompo en el controller de putCategory", error);
  }
};
module.exports = editCategory;
