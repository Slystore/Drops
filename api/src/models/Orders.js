// const { DataTypes, UUIDV4, DATE, DATEONLY } = require("sequelize");

// module.exports = (Sequelize) => {
//   return Sequelize.define(
//     "Orders",
//     {
//       date: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       location: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       totalPrice: {
//         type: DataTypes.DECIMAL(10, 2),
//         allowNull: true,
//         defaultValue: 0.0,
//       },
//       paymentId: {
//         type: DataTypes.INTEGER,
//         defaultValue: 0,
//       },
//       paymentStatus: {
//         type: DataTypes.STRING,
//         defaultValue: "",
//       },
//       merchantOrderId: {
//         type: DataTypes.BIGINT,
//         defaultValue: 0,
//       },
//       status: {
//         type: DataTypes.ENUM(
//           "inCart",
//           "created",
//           "pending",
//           "cancelled",
//           "completed"
//         ),
//       },
//       cart: {
//         type: DataTypes.ARRAY(DataTypes.JSON),
//       },
//     },
//     { timestamps: false }
//   );
// };
const { DataTypes, UUIDV4, DATE, DATEONLY } = require("sequelize");

module.exports = (Sequelize) => {
    return Sequelize.define(
        "Orders", {
            id: {
                primaryKey: true,
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
              },
            shipping_Address: {
                type: DataTypes.STRING,
            },
            shippingState: {
                type: DataTypes.ENUM(
                  "not initialized",
                  "initial", //appears as soon as payment is verified
                 "despachado",
                 "entregado"
                  // "created",
                  // "processing",
                  // "canceled",
                  // "completed"
                ),
                defaultValue: "not initialized"
              },
              paymentState: {
                type: DataTypes.STRING
                ,
                defaultValue: "notInitialized"
              },
              shippingAddress: {
                type: DataTypes.STRING,
        
                //defaultValue: "not initialized"
        
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
            payment_id:{
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
                defaultValue: 0
            },
            products: {
              type: DataTypes.ARRAY(DataTypes.JSON),
            },
            
        }, { timestamps: false }
    );
};

