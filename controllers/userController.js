const { User, Pet } = require('../models');


// Gets all Users with their Pet array from pet_db
const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.findAll({
            include: [
                {
                    model: Pet,
                },
            ]
        });

        res.status(200).json(allUsers);

    } catch (error) {
        console.log('userController.js getAllUsers()', error);
        res.status(500).json({ error });
    }
};


module.exports = {
    getAllUsers,
}