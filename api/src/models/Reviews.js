const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (Sequelize) => {
    return Sequelize.define(
        "Reviews", {
            comment: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            rating: {
                type: DataTypes.FLOAT,
                allowNull: false,
                defaultValue: 0.0
            }
        }, { timestamps: false }
    );
};