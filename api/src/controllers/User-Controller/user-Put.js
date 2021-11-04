const { Users } = require("../../db");
const userPut = async (req, res) => {
  let newData = req.body;
  const { id } = req.params;
   parseInt(id)
  try {
    let userUpdate = await Users.update(newData, {
      where: {
        id,
      },
    });
    let usuarioActualizado = await Users.findOne({
      where: {
        id,
      },
    });

    userUpdate[0] !== 0
      ? res.json({
          msg: "El usuario fue actualizado con exito",
          user: usuarioActualizado,
        })
      : res
          .status(404)
          .json({ msg: "Hubo un error y el usuario no pudo ser actualizado" });
  } catch (err) {
    console.log("rompo en el put controller", err);
  }
};
module.exports = userPut;
