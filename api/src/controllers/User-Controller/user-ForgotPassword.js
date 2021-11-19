const { Users } = require("../../db");
const transporter = require("../../config/mailer");
const forgotPassword = async (req, res) => {
  const { mail } = req.body;
  if (!mail) {
    return res.json({ msg: "Username is required " });
  }
  let userEmail = await Users.findOne({
    where: {
      mail,
    },
  });

  if (userEmail) {
    const url = `http://localhost:3000/recovery`;
    console.log("este es el user ", userEmail);
    try {
      await transporter.sendMail({
        from: '"Forgot password  " <dropshoes.info@gmail.com>', // sender address
        to: userEmail.mail, // list of receivers
        subject: "Hello ✔", // Subject line
        html: `<b>¿Olvidaste tu contraseña?,accede a este link para recuperarla </b>
        <a href="${url}">${url}</a>        
        `, // html body
      });
      res.json({ msg: "check" });
    } catch (err) {
      return res.status(400).json({ msg: "¿ Has olvidado tu contraseña? " });
    }
  }
};
module.exports = forgotPassword;
