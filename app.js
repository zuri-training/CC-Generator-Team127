const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoute = require('./routes/userRoute');
const commentRoute = require('./routes/commentRoute');
const passwordRoute = require('./routes/passwordRoute');
const cookieParser = require('cookie-parser');
const { checkUser } = require('./middleware/auth');

// connect to the database
mongoose.connect(process.env.dB_URI);

// initialize your express app
const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// initializing ejs engine
app.set('view engine', 'ejs');

// routes
app.get('*', checkUser);

userRoute.post('/sendEmail', userRoute);
app.use('/', passwordRoute);
app.use('/', userRoute);
app.use('/', commentRoute);
// assign a port
port = process.env.PORT || 7000;

app.use((req, res) => {
  res.status(404).render('404');
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
