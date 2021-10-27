const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Size', {
        number: {
            type: DataTypes.INTEGER
        },
    }, { timestamps: false });
};
