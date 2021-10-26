require('dotenv').config();
const {Sequelize} = require('sequelize')
const usersModel = require('./models/Users')
const shopCartsModel = require('./models/ShoppingCarts')
const reviewsModel = require('./models/Reviews')
const wishListsModel = require('./models/WishList')
const branchsModel = require('./models/BranchOffices')
const ordersModel = require('./models/Orders')

const {DB_USER,DB_PASSWORD,DB_NAME,DB_HOST} = process.env

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,{
        logging:false,
        native:false
    }
);


usersModel(sequelize)
shopCartsModel(sequelize)
reviewsModel(sequelize)
wishListsModel(sequelize)
branchsModel(sequelize)
ordersModel(sequelize)

console.log(sequelize.models)
const { Users, ShoppingCart, Reviews, WishList, BranchOffice, Orders } = sequelize.models

//Relaciones de Users

Users.hasMany(Reviews)
Reviews.belongsTo(Users)

Users.hasOne(WishList)
WishList.belongsTo(Users)

Users.hasOne(ShoppingCart)
ShoppingCart.belongsTo(Users)

Users.hasMany(Orders)
Orders.belongsTo(Users)

//relaciones de BranchOffice

// BranchOffice.hasMany(Products)
// Products.belongsTo(BranchOffice)


// relaciones de Orders

Orders.hasOne(ShoppingCart)
ShoppingCart.belongsTo(Orders)

// Orders.hasMany(Products)
// Products.belongsTo(Orders)

module.exports = {
    conn:sequelize,
}