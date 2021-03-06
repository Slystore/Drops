const { Users } = require("../../db");
const { OAuth2Client } = require("google-auth-library");
const keys = require("./google-secret-vercel.json");
const jwt = require("jsonwebtoken");
const authConfing = require("../../config/auth");
const googleLog = async (req, res) => {
  try {
    const client = new OAuth2Client(keys.web.client_id);
    let { wc, userType } = req.body;
    console.log('que es lo que me llega',req.body)
    const ticket = await client.verifyIdToken({
      idToken: wc.id_token,
      audience: keys.web.client_id,
    });
    const userValidate = await Users.findOne({
      where: {
        mail: ticket.payload.email,
      },
    });
    if (userValidate) {
      let token = jwt.sign({ user: userValidate }, authConfing.secret, {
        expiresIn: "999 days",
      });
      res.status(200).json({ auth: true, user: userValidate, token });
    } else {
      console.log('entro?')
      const idCortada = req.body.googleId.toString().slice(0,8)
      console.log('esta es mi id cortada ',idCortada,'y su tipo de dato',typeof idCortada)
      const userGoogle = await Users.create({
        id:idCortada,
        name: ticket.payload.given_name,
        surname: ticket.payload.family_name,
        mail: ticket.payload.email,
        password: ticket.payload.jti,
        phone: "+54 9 000 000000 ",
        location: "avenida siempre viva 220",
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
    }
  } catch (error) {
    console.log("rompo en el googlelog controller", error);
  }
};
module.exports = googleLog;
