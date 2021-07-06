const router = require('express').Router();

const eventRoutes = require('./')
const userRoutes = require('./');

router.use('/', userRoutes);
router.use('/', eventRoutes); 

module.exports = router;
