const { Users } = require("../../db");
const { Op } = require("sequelize");
const userGet = async (req, res) => {
  //busqueda por nombre
  const { name } = req.query;
  if (name) {
    console.log("estoy entrando?");
    name.toLowerCase().trim();
    let userName = await Users.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });
    res.status(200).json({ user: userName });
  }
  //busqueda por id
  const { id } = req.params;
  if (id) {
    let userId = await Users.findOne({
      where: {
        id,
      },
    });
    return res.json({ user: userId });
  }
  //busqueda global
  let allUsers = await Users.findAll();
  res.status(200).json({ users: allUsers });
};
module.exports = userGet;
