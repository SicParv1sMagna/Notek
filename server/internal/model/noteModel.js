const { DataTypes } = require('sequelize');
const sequelize = require("../../database/postgresql");
const User = require("./userModel");
const Directory = require("./directoryModel");

const Note = sequelize.define('Note', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'active',
    },
});

Note.belongsTo(User, { foreignKey: 'owner', as: 'noteOwner' });
Note.belongsTo(Directory, { foreignKey: 'directoryId', as: 'noteDirectory'});

module.exports = Note;
