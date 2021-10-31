const { Category } = require("../../db");
const createCategory = async (req, res) => {
  try {
    let { name } = req.body;
    if (name) {
      const newCategory = await Category.create({
        name,
      });
      if (newCategory) {
        return res
          .status(200)
          .json({ msg: "Caterogia creada con exito", newCategory });
      } else {
        res.status(400).json({ msg: "Ha ocurrido un error" });
      }
    }
  } catch (error) {
    console.log("Fallo en el controller de postCategories", error);
  }
};
module.exports = createCategory;
