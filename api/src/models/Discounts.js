const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Discounts', {
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        discounts: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        specs: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, { timestamps: false });
};