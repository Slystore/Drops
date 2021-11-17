const { Users } = require("../../db");

const userCount = async (req, res) => {
  let allUsers = await Users.count();
  res.status(200).json({ users: allUsers });
};
module.exports = userCount;
