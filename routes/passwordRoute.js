const express = require('express');
const controller = require('../controllers/passwordController');

const passwordRoute = express.Router();

passwordRoute.get('/newpassword', controller.newpassword);
passwordRoute.get('/passwordchange', controller.passwordchange);
passwordRoute.get('/resetpassword', controller.resetpassword);
passwordRoute.get('/emailsent', controller.emailsent);

module.exports = passwordRoute;
