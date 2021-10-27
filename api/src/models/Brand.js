const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Brand', {
        name: {
            type: DataTypes.STRING
        },
    }, { timestamps: false });
};
