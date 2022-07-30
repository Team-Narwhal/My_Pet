const router = require('express').Router();
const { getAllUsers } = require('../../controllers/userController');


// Routes for /api/user

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