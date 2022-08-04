const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Pet extends Model { }

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
        len: [1, 14],
        isAlphanumeric: true,
      },
    },
    hunger: {
      type: DataTypes.INTEGER,
      defaultValue: 1000,
      validate: {
        isNumeric: true,
      }
    },
    energy: {
      type: DataTypes.INTEGER,
      defaultValue: 1000,
      validate: {
        isNumeric: true,
      }
    },
    health: {
      type: DataTypes.INTEGER,
      defaultValue: 8,
      validate: {
        len: [1,8],
        isNumeric: true,
      }
    },
    isAlive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    // isActive: {
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: true,
    // },
    poop: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        len: [0,4],
        isNumeric: true,
      }
    },
    level: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        isNumeric: true,
      }
    },
    userId: {
      type: DataTypes.UUID,
      references: {
        model: 'users',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'pets',
  }
);

module.exports = Pet;