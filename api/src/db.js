require("dotenv").config();
const { Sequelize } = require("sequelize");

const usersModel = require("./models/Users.js");
const reviewsModel = require("./models/Reviews.js");
const wishListsModel = require("./models/WishList.js");
const ordersModel = require("./models/Orders.js");
const orderDetailModel = require("./models/OrderDetail.js");

const productModel = require("./models/Product.js");
const productSizeModel = require("./models/ProductSize.js");
const sizeModel = require("./models/Size.js");
const brandModel = require("./models/Brand.js");
const categoryModel = require("./models/Category.js");
const discountsModel = require("./models/Discounts");

const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST } = process.env;

let sequelize =
    process.env.NODE_ENV === "production" ?
    new Sequelize({
        database: DB_NAME,
        dialect: "postgres",
        host: DB_HOST,
        port: 5432,
        username: DB_USER,
        password: DB_PASSWORD,
        pool: {
            max: 3,
            min: 1,
            idle: 10000,
        },
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
            keepAlive: true,
        },
        ssl: true,
    }) :
    new Sequelize(
        `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
            logging: false,
            native: false
        }
    );

productModel(sequelize);
productSizeModel(sequelize);
sizeModel(sequelize);
brandModel(sequelize);
categoryModel(sequelize);

usersModel(sequelize);
reviewsModel(sequelize);
ordersModel(sequelize);
orderDetailModel(sequelize);

wishListsModel(sequelize);
discountsModel(sequelize);

const {
  Product,
  ProductSize,
  Size,
  Users,
  Reviews,
  Orders,
  OrderDetail,
  Brand,
  Category,
  WishList } = sequelize.models;

//Relaciones de Users
Users.belongsToMany(Product,{through:WishList});
Product.belongsToMany(Users,{through:WishList});

Users.hasMany(Orders);
Orders.belongsTo(Users);

Users.hasMany(Reviews);
Reviews.belongsTo(Users);

Reviews.belongsTo(Product);
Product.hasMany(Reviews);

// Users.hasMany(Reviews);
// Reviews.belongsTo(Users);

// relaciones de Orders

// Orders.hasMany(Products)
// Products.belongsTo(Orders)

//relaciones de Product
Category.hasMany(Product);
Product.belongsTo(Category);

Brand.hasMany(Product);
Product.belongsTo(Brand);

Product.belongsToMany(Size, { through: ProductSize });
Size.belongsToMany(Product, { through: ProductSize });

Product.belongsToMany(Orders, { through: OrderDetail });
Orders.belongsToMany(Product, { through: OrderDetail }); 

Orders.hasMany(OrderDetail);
OrderDetail.belongsTo(Orders);

module.exports = {
  conn: sequelize,
  ...sequelize.models,
};
