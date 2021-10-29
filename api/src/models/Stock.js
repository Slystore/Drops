const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Stocks', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        stock:{
            type: DataTypes.INTEGER,
        },
    }, {timestamps: false})
}