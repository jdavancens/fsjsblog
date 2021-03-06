var router = require('express').Router();

// api router will mount other routers
// for all our resources
router.use('/images', require('./image/imageRoutes'));
router.use('/posts', require('./post/postRoutes'));
router.use('/tags', require('./tag/tagRoutes'));
router.use('/users', require('./user/userRoutes'));

module.exports = router;
