const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (Sequelize) => {
  return Sequelize.define("WishList", {
    favorite:{
      type:DataTypes.BOOLEAN,
      defaultValue:false
    }
  }, { timestamps: false });
};
