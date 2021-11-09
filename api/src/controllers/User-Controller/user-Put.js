const { Users } = require("../../db");
const bcrypt = require("bcrypt");
const authConfing = require("../../config/auth");
const userPut = async (req, res) => {
  let newData = req.body;
  let oldPassword = req.body.oldPassword;
  let password = req.body.password;
  const { id } = req.params;
  parseInt(id);
  try {
    const user = await Users.findOne({
      where: {
        id,
      },
    });

    if (password) {
      const match = await bcrypt.compare(oldPassword, user.password);
      if (match) {
        let newPassHash = await bcrypt.hash(password, +authConfing.rounds);
        let userNewPass = await Users.update(
          { password: newPassHash },
          {
            where: {
              id,
            },
          }
        );
        let userWithNewPaas = await Users.findOne({
          where: {
            id,
          },
        });
        userNewPass[0].length !== 0
          ? res.json({
              msg: "El usuario fue actualizado",
              user: userWithNewPaas,
            })
          : res.status(400).json({
              msg: "Hubo un error y la contraseña no pudo ser actualizada",
            });
      } else {
        res.json({ msg: "La contraseña actual no es correcta" });
      }
    } else {
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
        : res.status(404).json({
            msg: "Hubo un error y el usuario no pudo ser actualizado",
          });
    }
  } catch (err) {
    console.log("rompo en el put controller", err);
  }
};
module.exports = userPut;
