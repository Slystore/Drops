const { Users } = require("../../db");
const { OAuth2Client } = require("google-auth-library");
const keys = require("./google-keys.json");
const jwt = require("jsonwebtoken");
const authConfing = require("../../config/auth");
const googleLog = async (req, res) => {
  try {
    const client = new OAuth2Client(keys.web.client_id);
    let { Zb, userType } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: Zb.id_token,
      audience: keys.web.client_id,
    });
    const userValidate = await Users.findOne({
      where: {
        mail: ticket.payload.email,
      },
    });
    const userGoogle = await Users.create({
      name: ticket.payload.given_name,
      surname: ticket.payload.family_name,
      mail: ticket.payload.email,
      password: ticket.payload.jti,
      phone:"+54 9 000 000000 ",
      location:"avenida siempre viva 220",
      userType,
    });
    if (userGoogle) {
      let token = jwt.sign({ user: userGoogle }, authConfing.secret, {
        expiresIn: "999 days",
      });
      res.status(200).json({
        msg: "Usuario creado con exito",
        user: userGoogle,
        token: token,
      });
    }
  } catch (error) {
    console.log("rompo en el googlelog controller", error);
  }
};
module.exports = googleLog;
