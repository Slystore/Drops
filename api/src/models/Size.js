const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Size', {
        number: {
            type: DataTypes.INTEGER
        },
        created: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, { timestamps: false });
};
