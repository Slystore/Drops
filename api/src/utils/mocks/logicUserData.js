const { Users } = require("../../db.js");
const {userData} = require("./userTest.js");

const createUserTest = async () => {
    for(let item of userData){
        await Users.create(item);
    }
};

module.exports = { createUserTest };
