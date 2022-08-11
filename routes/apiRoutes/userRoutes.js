const router = require('express').Router();
const { getAllUsers, signUp, signIn, signOut, getUserId } = require('../../controllers/userController');
const { Pet } = require('../../models');

// Routes for /api/user

//Asha
//POST route for signin
router.post('/signin', signIn);

//route for /signup
router.post('/signup', signUp);

// Angie 
// Asha updated Modularization 
// Destroys the session when a user signs out.
router.post('/signout', signOut);

router.get('/getUserId' , getUserId)

// Sample get route to /api/user to get all users
router.route('/')
    .get(getAllUsers);

module.exports = router;