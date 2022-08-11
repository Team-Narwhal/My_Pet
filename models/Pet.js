const { Model, DataTypes } = require('sequelize');
// Import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Pet extends Model { }

Pet.init(
  {
    // Define database columns
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
      },
    },
    hunger: {
      type: DataTypes.INTEGER,
      defaultValue: 100,
      validate: {
        isInt: true,
      }
    },
    energy: {
      type: DataTypes.INTEGER,
      defaultValue: 100,
      validate: {
        isInt: true,
      }
    },
    health: {
      type: DataTypes.INTEGER,
      defaultValue: 8,
      validate: {
        max: 8,
        min: 1,
        isInt: true,
      }
    },
    isAlive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    poop: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        max: 4,
        min: 0,
        isInt: true,
      }
    },
    level: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        isInt: true,
      }
    },
    isHappy: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 70,
      validate: {
        isNumeric: true,
      }
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 400,
      validate: {
        isNumeric: true,
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
      }
    },
    defense: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 40,
      validate: {
        isInt: true,
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