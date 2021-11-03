const { DataTypes, UUIDV4, DATE, DATEONLY } = require("sequelize");

module.exports = (Sequelize) => {
  return Sequelize.define(
    "Orders",
    {
      date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      products: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      totalPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
      },
      paymentId: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      paymentStatus: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      merchantOrderId: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      status: {
        type: DataTypes.ENUM(
          "inCart",
          "created",
          "pending",
          "cancelled",
          "completed"
        ),
      },
      cart: {
        type: DataTypes.ARRAY(DataTypes.JSON),
      },
    },
    { timestamps: false }
  );
};
