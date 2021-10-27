const { Datatypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Product', {
        name:{
            type: Datatypes.STRING,
        },
        image: {
            type: Datatypes.STRING,
        },
        description:{
            type: Datatypes.STRING,
        },
        price:{
            type: Datatypes.DECIMAL(10,2),
        },
        status:{
            type: Datatypes.ENUM('active', 'inactive'),
        }
    })
}
