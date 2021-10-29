const { Brand, Category, Product } = require("../../../db.js");
const {data} = require("./dataMock.js");

const prueba = async () => {
    for(let item of data){
       await Product.create(item);
    }
};

module.exports = { prueba };
