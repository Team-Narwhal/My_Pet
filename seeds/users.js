const { User } = require('../models');

// seed Users data for bulkCreate
const usersData = [
    {
        id: '8a923311-dd96-48d4-8817-f9705dfbee0e',
        username: 'Becky',
        password: 'password',
    },
    {
        id: '8022d134-c225-494b-9845-41f594577e85',
        username: 'Too Wong Fu',
        password: 'password',
    },
];

const seedUsers = () => User.bulkCreate(usersData);

module.exports = seedUsers;