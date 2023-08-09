const { DataTypes } = require("sequelize");
const sequelize = require("../../database/postgresql");
const User = require("./userModel");

const Directory = sequelize.define('Directory', {
    owner: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        },
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'none',
    },
    icon: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "empty",
    }
});

Directory.belongsTo(User, { foreignKey: 'owner', as: 'directoryOwner' }); // Создаем связь между Directory и User

module.exports = Directory;
