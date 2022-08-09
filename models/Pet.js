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
      defaultValue: 100,
      validate: {
        isNumeric: true,
      }
    },
    energy: {
      type: DataTypes.INTEGER,
      defaultValue: 100,
      validate: {
        isNumeric: true,
      }
    },
    health: {
      type: DataTypes.INTEGER,
      defaultValue: 8,
      validate: {
        max: 8,
        min: 1,
        isNumeric: true,
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
    isHappy: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
        isNull: false,
      }
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
        isNull: false,
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
        isNull: false,
      }
    },
    defense: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
        isNull: false,
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