const router = require('express').Router();
const petRoutes = require('./petRoutes');
const userRoutes = require('./userRoutes');

// Routes for pet
router.use('/pet', petRoutes);
// Routes for user
router.use('/user', userRoutes);

module.exports = router;
