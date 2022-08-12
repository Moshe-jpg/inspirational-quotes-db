const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const quotesRoutes = require('./quotes-routes.js');


router.use('/users', userRoutes);
router.use('/posts', quotesRoutes);


module.exports = router;
