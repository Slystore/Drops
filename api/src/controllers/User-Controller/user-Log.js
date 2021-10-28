const { Users } = require("../../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const authConfing = require("../../config/auth");

const login = async (req, res) => {
  let { mail, password } = req.body;
  let user = await Users.findOne({
    where: {
      mail: mail,
    },
    attributtes: [password, mail],
  });
  try {
    if (!user) {
      res.json({ msg: "Este usuario no coincide con uno existente" });
    }
    let match = await bcrypt.compare(password, user.password);
    console.log("este es el resultado del match", match);
    if (match) {
      let token = jwt.sign({ user: user }, authConfing.secret, {
        expiresIn: "999days",
      });
      return res
        .status(200)
        .json({ auth: true, msg: "logeado con exito", token: token });
    } else {
      return res.json({
        auth: false,
        msg: "La contraseña el mail no coinciden con nuestros registros. Por favor intenete de nuevo",
      });
    }
  } catch (err) {
    console.log("rompo en el login controller", err);
  }
};

module.exports = login;
