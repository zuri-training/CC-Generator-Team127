const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/userRoute');
const app = express();
PORT = process.env.PORT || 7000;

// connect to the database
mongoose.connect('mongodb://localhost/credit-card-api');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// env file
dotenv.config({ path: '.env' });

app.get('/', (req, res) => {
  res.send('Hello');
});

app.use('/api', userRoute);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
