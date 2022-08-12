const router = require('express').Router();
const { getActivePetByUserId,getAlivePetByUserId,createNewPet,updatePetAttributes} = require('../../controllers/petController');
const { Pet } = require('../../models');

// Routes for /api/pet

// Sample get route to get all pets associated to a specific
// userId
// router.route('/:userId').get
//Get route to get the active pet by user id
router.route('/:userId').get(getActivePetByUserId);
//Get route to get the alive pet by user id
// router.route('/alive/:userId').get(getAlivePetByUserId);
//Post route to create new pet
router.route('/').post(createNewPet);
//Put route with update/save the attributes
// router.route('/:petId').put(createNewPet);
router.route('/:petId').put(updatePetAttributes)

module.exports = router;