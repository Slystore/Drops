const { DataTypes, UUIDV4, DATE, DATEONLY } = require("sequelize");

module.exports = (Sequelize) => {
  return Sequelize.define(
    "Orders",
    {
      shippingState: {
        type: DataTypes.ENUM(
          "not initialized",
          "initial",
          "despachado",
          "entregado"
        ),
        defaultValue: "not initialized",
      },
      paymentState: {
        type: DataTypes.STRING,
        defaultValue: "notInitialized",
      },
      shippingAddress: {
        type: DataTypes.STRING,
      },
      shippingZip: {
        type: DataTypes.INTEGER,
      },
      shippingLocated: {
        type: DataTypes.STRING,
      },
      shippingCity: {
        type: DataTypes.STRING,
      },
      payment_id: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.ENUM(
          "inCart",
          "pending",
          "processing",
          "cancelled",
          "completed"
        ),
        defaultValue: "inCart",
        allowNull: false,
      },

      merchant_order_id: {
        type: DataTypes.BIGINT,
        defaultValue: 0,
      },
      products: {
        type: DataTypes.ARRAY(DataTypes.JSON),
      },
    },
    { timestamps: false }
  );
};
