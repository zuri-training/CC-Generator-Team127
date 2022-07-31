const express = require('express');
const controller = require('../controllers/userController');

const router = express.Router();

// signup API route
router.post('/signup', controller.signup);

// signin API route
router.post('/signin', controller.signin);

module.exports = router;
