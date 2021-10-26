const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (Sequelize) => {
    return Sequelize.define(
        "ShoppingCart", {
            products: {
                type: DataTypes.ARRAY(DataTypes.JSON),
            },
        }, { timestamps: false }
    );
};