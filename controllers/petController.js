const { User, Pet } = require('../models');


// Gets all pets associated with a specific userId
const getPetsByUserId = async (req, res) => {
    try {
        const userPets = await Pet.findAll({
            where: {
                userId: req.params.userId,
            }
        });
        res.status(200).json(userPets);

    } catch (error) {
        console.log('petController.js getPetsByUserId()', error);
        res.status(500).json({ error });
    }
};

module.exports = {
    getPetsByUserId,
}