const express = require('express');

const app = express();
const mongoose = require('mongoose');
const { handleError } = require('./utils/ErrorHandler');
require('dotenv/config');

// Use body parser for json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import Routes
const auth = require('./routes/auth');
app.use('/auth', auth);
const profile = require('./routes/profile');
app.use('/profile', profile);

// Routes
app.get('/', (req, res) => {
  res.send('We are on home');
});

// Handle Error
app.use(async (err, req, res, next) => {
  handleError(err, res);
});

// Connect to db
mongoose.connect(process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true, 
    useCreateIndex: true, useFindAndModify: false},
  () => console.log('connected to db!'));

// Now start listening on 3000
app.listen(process.env.PORT || 3000);
