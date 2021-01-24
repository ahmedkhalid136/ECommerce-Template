const express = require('express');
const router = express.Router();
const adminRoutes = require('./modules/AdminModule/routes');

router.use('/admin', adminRoutes);

module.exports = router;