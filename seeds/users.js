const { User } = require('../models');

// seed Users data for bulkCreate
const usersData = [
    {
        id: '8a923311-dd96-48d4-8817-f9705dfbee0e',
        email: 'becky@gmail.com',
        password: 'password',
    },
    {
        id: '8022d134-c225-494b-9845-41f594577e85',
        email: 'cutepets@yahoo.com',
        password: 'password',
    },
];

const seedUsers = () => User.bulkCreate(usersData, {
    individualHooks: true,
});

module.exports = seedUsers;