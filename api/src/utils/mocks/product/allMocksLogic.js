const { Product } = require("../../../db.js");
const {allMocks} = require("./allMocks.js");

const allMocksLogic = async () => {
    for(let item of allMocks){
       await Product.create(item);
    }
};

module.exports = { allMocksLogic };
