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

// Nolan
// Renders the environment.handlebars
router.get('/playpen', (req, res) => {
    // redirect to landing_page if not logged in
    if (!req.session.isLoggedIn) {
        return res.redirect('/');
    };
    res.render('environment', {
        isLoggedIn: req.session.isLoggedIn || false,
    })
});

// Nolan
// Renders the battle.handlebars
router.get('/battle', (req, res) => {
    // redirect to landing_page if not logged in
    if (!req.session.isLoggedIn) {
        return res.redirect('/');
    };
    res.render('battle', {
        isLoggedIn: req.session.isLoggedIn || false,
    });
});

module.exports = router;