const router = require('express').Router();
const { getPetsByUserId } = require('../../controllers/petController');



// Routes for /api/pet

// Sample get route to get all pets associated to a specific
// userId
router.route('/:userId')
    .get(getPetsByUserId);


module.exports = router;