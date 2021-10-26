require('dotenv').config();
const {Sequelize} = require('sequelize')

const {DB_USER,DB_PASSWORD,DB_NAME,DB_HOST} = process.env

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,{
        logging:false,
        native:false
    }
);

module.exports = {
    conn:sequelize,
}