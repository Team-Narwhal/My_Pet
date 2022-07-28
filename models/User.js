// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class User extends Model {}

User.init(
    {
      // define columns
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            len: [1,14],
            isAlphanumeric: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          len: [6,],
        },
      },
    },
    {
      sequelize,
      modelName: 'users',
    }
  );
  
  module.exports = User;