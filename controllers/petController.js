const { User, Pet } = require('../models');

//Asha
//GET all pets

// Get active pet with specific Userid
const getActivePetByUserId = async (req, res) => {
    try {
        const userPet = await Pet.findOne({
            where: {
                userId: req.params.userId,
                isActive: true,
            }
        });
        res.status(200).json(userPet);

    } catch (error) {
        console.log('petController.js getActivePetByUserId()', error);
        res.status(500).json({ error });
    }
};

//Get alive pet with specific userId.
const getAlivePetByUserId = async (req, res) => {
    try {
        const alivePet = await Pet.findOne({
            where: {
                userId: req.params.userId,
                isAlive: true,
            }
        });
        res.status(200).json(alivePet);

    } catch (error) {
        console.log('petController.js getAlivePetByUserId()', error);
        res.status(500).json({ error });
    }
};
//POST request will create a new pet
const createNewPet = async (req, res) => {
    try {
        const createPet = await Pet.create(req.body);

        res.status(200).json(createPet);
    } catch (err){
        res.status(400).json(err);
    }
};

//PUT request will save/update the attributes
const updatePetAttributes = async (req, res) => {
    try {
      const petAttributes = await Pet.update(req.body, {
        where: {
          id: req.params.petId,
        },
      });
      if (!petAttributes[0]) {
        res.status(404).json({ message: 'This pet ID does not exist!' });
        return;
      }
      res.status(200).json(petAttributes);
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  };


module.exports = {
    getActivePetByUserId,
    getAlivePetByUserId,
    createNewPet,
    updatePetAttributes,
}