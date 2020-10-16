const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')
//Middlewares
//Used when the routes is accessed by users.

//Routes
app.get('/', (req, res) => {
    res.send("We are on home")
});

app.get('/posts', (req, res) => {
    res.send("Another endpoints")
});

//connect to db
mongoose.connect(process.env.DB_CONNECTION, 
{useNewUrlParser: true, useUnifiedTopology: true},
() =>
    console.log('connected to db!')
);

//Now start listening on 3000
app.listen(3000);