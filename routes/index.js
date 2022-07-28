const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const viewRoutes = require('./viewRoutes');

// api routes for database
router.use('/api', apiRoutes);
// routes to render page
router.use('/', viewRoutes);

module.exports = router;