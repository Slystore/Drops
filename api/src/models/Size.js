const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Size', {
        numbers: {
            type: DataTypes.INTEGER
        },
    }, { timestamps: false });
};
