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


// Angie
// Destroys the session when a user signs out.
router.post('/signout', async (req, res) => {
    if (req.session.isLoggedIn) {
        req.session.destroy(() => {
            res.json({ success: true });
        });
    }
});

// Sample get route to /api/user to get all users
router.route('/')
    .get(getAllUsers);

module.exports = router;