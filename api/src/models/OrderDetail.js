const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('OrderDetail', {
        price:{
            type: DataTypes.DECIMAL(10,2),
        },
        quantity: {
            type: DataTypes.INTEGER,
        },
    }, {timestamps: false})
}
