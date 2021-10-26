require('dotenv').config();
const {Sequelize} = require('sequelize')
const usersModel = require('./models/Users')

const {DB_USER,DB_PASSWORD,DB_NAME,DB_HOST} = process.env

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,{
        logging:false,
        native:false
    }
);

usersModel(sequelize)

module.exports = {
    conn:sequelize,
}