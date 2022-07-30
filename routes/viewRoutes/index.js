const router = require('express').Router();

// this is the / route
// Put HandleBars rendering Here
// This will serve our web pages to the user

// Angie
// Renders landing_page.handlebars
router.get('/', (req, res) => {
    // Will add more here later.
    res.render('/', {
        isLoggedIn: req.session.isLoggedIn || false,
    });
});

module.exports = router;