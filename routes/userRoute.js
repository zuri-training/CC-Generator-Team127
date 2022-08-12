const express = require('express');
const userRoute = express.Router();
const controller = require('../controllers/userController');

// signup API route
userRoute.post('/signup', controller.signup);
userRoute.get('/signup', controller.signUp);

// signin API route
userRoute.post('/signin', controller.signin);
userRoute.get('/signin', controller.signIn);

// library API route
userRoute.get('/library', controller.library);

// sendEmail API route
userRoute.post('/sendEmail', controller.sendEmail);

userRoute.get('/download1', controller.downloadpage1);

// index API route
userRoute.get('/index', controller.index);
userRoute.get('/', controller.index);

// about API route
userRoute.get('/about', controller.about);

// contact-us API route
userRoute.get('/contact', controller.contact);

module.exports = userRoute;
