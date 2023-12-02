const connection = require('./connection.js')
const {DataTypes, Sequelize} = require('sequelize')
const {dbConnection} = require('./config.js')

const User = connection(dbConnection).define(
    'User',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        access_token: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        refresh_token: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
        },
    },
    {
        tableName: 'users',
    }
)

module.exports = User