require("dotenv").config();
const { Sequelize } = require("sequelize");

const usersModel = require("./models/Users.js");
const reviewsModel = require("./models/Reviews.js");
const wishListsModel = require("./models/WishList.js");
const ordersModel = require("./models/Orders.js");

const productModel = require("./models/Product.js");
const sizeModel = require("./models/Size.js");
const brandModel = require("./models/Brand.js");
const categoryModel = require("./models/Category.js");

const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST } = process.env;
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);

productModel(sequelize);
sizeModel(sequelize);
brandModel(sequelize);
categoryModel(sequelize);

usersModel(sequelize);
reviewsModel(sequelize);
ordersModel(sequelize);
wishListsModel(sequelize);

const {
  Product,
  Size,
  Users,
  Reviews,
  Orders,
  Brand,
  Category,
  WishList } = sequelize.models;

//Relaciones de Users


Users.hasOne(WishList);
WishList.belongsTo(Users);

Users.hasMany(Orders);
Orders.belongsTo(Users);

Users.hasMany(Reviews, { onDelete: "CASCADE" });
Reviews.belongsTo(Users, { onDelete: "CASCADE" });

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

Product.belongsToMany(Size, { through: "ProductSize" });
Size.belongsToMany(Product, { through: "ProductSize" });

module.exports = {
  conn: sequelize,
  ...sequelize.models,
};
