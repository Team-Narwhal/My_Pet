const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Pet extends Model {}

Pet.init(
    {
      // define columns
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        defaultValue: 'Bubbles',
        validate: {
            len: [1,14],
            isAlphanumeric: true,
        },
      },
      isAlive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      userId: {
        type: DataTypes.UUID,
        references: {
            model: 'users',
            key: 'id',
        }
      },
    },
    {
      sequelize,
      modelName: 'pets',
    }
  );
  
  module.exports = Pet;