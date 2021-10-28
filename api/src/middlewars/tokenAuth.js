const jwt = require("jsonwebtoken");
const authConfing = require("../config/auth");
const tokenAuth = async () => {
  const bearHeader = req.headers["authorization"];
  if (!bearHeader) {
    res.status(403).json({ msg: "Acceso no autorizado" });
  } else {
    const token = bearHeader;
    try {
      jwt.verify(token, authConfing.secret, function (err, decoded) {
        if (err) {
          res
            .status(401)
            .json({ msg: "No tiene autorizacion para ver este contenido" });
        }
      });
      next();
    } catch (err) {
      console.log("yo rompo", err);
    }
  }
};
module.exports = tokenAuth;
