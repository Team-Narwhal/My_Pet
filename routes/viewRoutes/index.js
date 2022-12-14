const router = require('express').Router();

// this is the / route
// Put HandleBars rendering Here
// This will serve our web pages to the user

// Angie
// Renders landing_page.handlebars
router.get('/', (req, res) => {
    // Will add more here later.
    res.render('landing_page', {
        isLoggedIn: req.session.isLoggedIn || false,
        isLandingPage: true,
    });
});

// Nifer
// Renders signup.handlebars
router.get('/signup', (req, res) => {
    // Will add more here later.
    res.render('signup');
});

// Nifer
// Renders create_pet.handlebars
router.get('/create_pet', (req, res) => {
    res.render('create_pet');
});

// Nolan
// Renders the environment.handlebars
router.get('/playpen', (req, res) => {
    // redirect to landing_page if not logged in
    // if (!req.session.isLoggedIn) {
    //     return res.redirect('/');
    // };
    res.render('playpen', {
        isLoggedIn: req.session.isLoggedIn || false,
        isPlaypen: true,
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
        isBattlePage: true,
    });
});

module.exports = router;
