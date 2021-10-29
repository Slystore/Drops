const { Brand } = require("../../db");
const createBrand = async (req, res) => {
  let { name } = req.body;
  try {
    let newBrand = await Brand.create({
      name,
    });
    if (newBrand)
      return res.status(200).json({ msg: "Brand creada con exito" });
    else
      return res
        .status(400)
        .json({ msg: "Oops algo no ha salido bien, intente de nuevo" });
  } catch (err) {
    console.log("rompo en el controller de post Brand", err);
  }
};
module.exports = createBrand;
