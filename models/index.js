const User = require('./User');
const Pet = require('./Pet');

// Associations

// A user has one to many pets
// If a user is deleted, delete their pets
User.hasMany(Pet, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
});

// A pet belongs to a user
Pet.belongsTo(User, {
    foreignKey: 'userId',
});

module.exports = {
    User,
    Pet,
}