const router = require('express').Router();
const { getAllUsers, signUp, signIn } = require('../../controllers/userController');
const { Pet } = require('../../models');


// Routes for /api/user
//renders signup/landing page

//Asha
//POST route for signin
router.post('/signin', signIn);

//route for /signup
router.post('/signup', signUp);


// Sample get route to /api/user to get all users
router.route('/')
    .get(getAllUsers);

module.exports = router;