const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('OrderDetail', {
        price:{
            type: DataTypes.DECIMAL(10,2),
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {timestamps: false})
}