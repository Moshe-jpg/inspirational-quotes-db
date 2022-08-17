const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const quotesRoutes = require('./quote-routes');
const commentsRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/quotes', quotesRoutes);
router.use('/comments', commentsRoutes);


module.exports = router;
