const { Brand } = require("../../db");
const editBrand = async (req,res) => {
  try {
    let brandInfo = req.body;
    const { id } = req.params;
    const newBrand = await Brand.update(brandInfo, {
      where: {
        id,
      },
    });
    let brandUptade = await Brand.findOne({
      where: {
        id,
      },
    });
    newBrand[0] !== 0
      ? res.json({ msg: "La marca fue actualizada", brand: brandUptade })
      : res
          .status(400)
          .json({ msg: "Hubo un eror y no se pudo actualizar la Brand" });
  } catch (error) {
    console.log("rompo en el controller de putBrand", error);
  }
};
module.exports = editBrand;
