
const express = require('express');
const router = express.Router();
const path = require('path');

const usersRoutes = require('./users');


router.use('/users', usersRoutes);


module.exports = router;