const { DataTypes, UUIDV4, DATE, DATEONLY } = require("sequelize");

module.exports = (Sequelize) => {
    return Sequelize.define(
        "Orders", {

            date: {
                type: DataTypes.DATEONLY,
                allowNull: false,
                defaultValue: Sequelize.NOW
            },
            products: {
                type: DataTypes.ARRAY(DataTypes.JSON),
                allowNull: false
            },
            shipping_Address: {
                type: DataTypes.STRING,
                allowNull: false
            },
            total_Price: {
                type: DataTypes.FLOAT,
                allowNull: false,
                defaultValue: 0.0
            },
            payment_id:{
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            payment_status:{
                type: DataTypes.STRING,
                defaultValue: ""
            },
            merchant_order_id: {
                type: DataTypes.BIGINT,
                defaultValue: 0
            }
        }, { timestamps: false }
    );
};