require("dotenv").config();
const { Sequelize } = require("sequelize");

const brandModel = require("./models/Brand.js");
const categoryModel = require("./models/Category.js");
const usersModel = require("./models/Users.js");
const reviewsModel = require("./models/Reviews.js");
const wishListsModel = require("./models/WishList.js");
const ordersModel = require("./models/Orders.js");
const productsModel = require("./models/Product.js");

const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST } = process.env;
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);

productsModel(sequelize);
usersModel(sequelize);
reviewsModel(sequelize);
ordersModel(sequelize);
brandModel(sequelize);
categoryModel(sequelize);
wishListsModel(sequelize);

const { 
Product,
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

// Users.hasMany(Reviews);
// Reviews.belongsTo(Users);

// relaciones de Orders

// Orders.hasMany(Products)
// Products.belongsTo(Orders)

//relaciones de Product
Product.belongsToMany(Category, { through: "ProductCategory" });
Category.belongsToMany(Product, { through: "ProductCategory" });

Users.hasMany(Reviews, {onDelete: "CASCADE"})
Reviews.belongsTo(Users, {onDelete: "CASCADE"})

Product.belongsTo(Brand);
Brand.hasMany(Product);


module.exports = {
  conn: sequelize,
  ...sequelize.models,
};
