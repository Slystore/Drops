const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('ProductSize', {
        stock: {
            type: DataTypes.INTEGER,
        }
    }, {timestamps: false})
}