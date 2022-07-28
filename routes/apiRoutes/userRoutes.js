const router = require('express').Router();
const { getAllUsers } = require('../../controllers/userController');


// Routes for /api/user

// Sample get route to /api/user to get all users
router.route('/')
    .get(getAllUsers);

module.exports = router;