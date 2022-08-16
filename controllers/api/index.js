const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const quotesRoutes = require('./quote-routes');


router.use('/users', userRoutes);
router.use('/quotes', quotesRoutes);


module.exports = router;
