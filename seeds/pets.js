const { Pet } = require('../models');

// Seed pets data for bulkCreate
const petsData = [
    {
        id: 'a91cbbc1-9767-4f15-add0-99e0b5918c94',
        name: 'Wiggles',
        userId: '8a923311-dd96-48d4-8817-f9705dfbee0e',
        attack: 100,
        hp: 600,
        type: 'Jackalope',
        defense: 50,
        hunger: 50,
        energy: 50,
        health: 4,
        poop: 3
    },
    {
        id: 'be58d5b7-9cf9-4b8c-b2df-b56f8ecaddcf',
        name: 'Shaky',
        userId: '8a923311-dd96-48d4-8817-f9705dfbee0e',
        isActive: false,
        isAlive: false,
        attack: 100,
        hp: 600,
        type: 'Unicorn',
        defense: 50,
    },
    {
        id: '6f486c8a-2732-4d75-9431-8d59e46b5638',
        name: 'Titan',
        userId: '8022d134-c225-494b-9845-41f594577e85',
        attack: 100,
        hp: 600,
        type: 'Yeti',
        defense: 50,
    },
    {
        id: '871cc01c-7d76-4169-ba74-b5cd8a87b6fc',
        name: 'Tiny',
        userId: '8022d134-c225-494b-9845-41f594577e85',
        isActive: false,
        isAlive: false,
        attack: 100,
        hp: 600,
        type: 'Yeti',
        defense: 50,
    },
];

const seedPets = () => Pet.bulkCreate(petsData);

module.exports = seedPets;