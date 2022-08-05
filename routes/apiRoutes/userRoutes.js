const router = require('express').Router();
const { getAllUsers, signUp, signIn, signOut, getUserId } = require('../../controllers/userController');
const { Pet } = require('../../models');

router.get('/getUserId' , getUserId)


// Routes for /api/user
//renders signup/landing page

//Asha
//POST route for signin
router.post('/signin', signIn);

//route for /signup
router.post('/signup', signUp);

// Angie 
//Asha updated Modularization 
// Destroys the session when a user signs out.
router.post('/signout', signOut);

//

// Sample get route to /api/user to get all users
router.route('/')
    .get(getAllUsers);

module.exports = router;