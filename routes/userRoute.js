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
userRoute.get('/download2', controller.downloadpage2);
userRoute.get('/download3', controller.downloadpage3);
userRoute.get('/download4', controller.downloadpage4);
userRoute.get('/download5', controller.downloadpage5);
userRoute.get('/download6', controller.downloadpage6);
userRoute.get('/download7', controller.downloadpage7);
userRoute.get('/download8', controller.downloadpage8);

// index API route
userRoute.get('/index', controller.index);
userRoute.get('/', controller.index);

// about API route
userRoute.get('/about', controller.about);

// contact-us API route
userRoute.get('/contact', controller.contact);

module.exports = userRoute;
