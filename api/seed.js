const userData = require('./src/utils/mocks/usersEcommerce')
const {  Users } = require('./src/db')

const seedUsers = async (next) => {
    try {
        userData.forEach(async el => {
            await Users.create(el)
        })  
      
    } catch (error) {
        next(error)
    }
    
}


module.exports = seedUsers