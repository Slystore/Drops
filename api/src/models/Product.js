const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Product', {
        name:{
            type: DataTypes.STRING,
        },
        image: {
            type: DataTypes.STRING,
        },
        description:{
            type: DataTypes.STRING,
        },
        price:{
            type: DataTypes.DECIMAL(10,2),
        },
        status:{
            type: DataTypes.ENUM('disponible', 'no disponible'),
        },
        onSale: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        Discounts: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        discountDay: {
            type: DataTypes.STRING,
            allowNull: true
        },
    }, {timestamps: false})
}
