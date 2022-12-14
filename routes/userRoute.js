const express = require('express');
const userRoute = express.Router();
const controller = require('../controllers/userController');
const { isAuth } = require('../middleware/auth');

// how-to-use
userRoute.get('/use', controller.howTo);

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

// Show more cards
userRoute.get('/download1', isAuth, controller.downloadpage1);
userRoute.get('/download2', isAuth, controller.downloadpage2);
userRoute.get('/download3', isAuth, controller.downloadpage3);
userRoute.get('/download4', isAuth, controller.downloadpage4);
userRoute.get('/download5', isAuth, controller.downloadpage5);
userRoute.get('/download6', isAuth, controller.downloadpage6);
userRoute.get('/download7', isAuth, controller.downloadpage7);
userRoute.get('/download8', isAuth, controller.downloadpage8);

// developer center
userRoute.get('/developer', controller.developer);

// index API route
userRoute.get('/index', controller.index);
userRoute.get('/', controller.index);

// about API route
userRoute.get('/about', controller.about);

// contact-us API route
userRoute.get('/contact', controller.contact);

userRoute.get('/logout', controller.logout_get);
module.exports = userRoute;
