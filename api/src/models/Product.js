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
        priceDiscount:{
            type: DataTypes.VIRTUAL,
            get(){
                // if( (this.getDataValue('Discounts') !== null )
                return parseFloat( (this.getDataValue('price') - (this.getDataValue('Discounts') / 100) * this.getDataValue('price')).toPrecision(4));
            }
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
