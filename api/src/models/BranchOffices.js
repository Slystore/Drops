const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (Sequelize) => {
    return Sequelize.define(
        "BranchOffice", {
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            location: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        }, { timestamps: false }
    );
};