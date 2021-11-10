const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (Sequelize) => {
    return Sequelize.define(
        "Users", {
            id: {
                type: DataTypes.BIGINT,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isAlpha: {
                        msg: "Solo puede tener letras"
                    },
                    len: {
                        args: [2, 255],
                        msg: "El nombre tiene que tener minimo dos caracteres"
                    }
                }
            },
            surname: {
                type: DataTypes.STRING,
                allowNull: false
            },
            profileImg: {
                type: DataTypes.STRING,
                defaultValue: "https://i.postimg.cc/bNk3y03Z/avatar-g85f64b319-640.png"
            },
            mail: {
                type: DataTypes.STRING,
                unique: true,
                validate: {
                    isEmail: {
                        msg: "Debe ser un correo valido"
                    }
                },
            },
            phone: {
                type: DataTypes.STRING,
                allowNull: false
            },
            location:{
                type: DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    len: {
                        args: [6, 65],
                        msg: "Debe tener minimo 6 caracteres"
                    }
                },
            },
            userType:{
                type: DataTypes.ENUM("superadmin", "admin", "user", "banned", "disabled"),
                defaultValue: "user",
            }
        }, { timestamps: false }
    );
};