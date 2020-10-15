const express = require('express');
const app = express();

//Middlewares
//Used when the routes is accessed by users.

//Routes
app.get('/', (req, res) => {
    res.send("We are on home")
});

app.get('/posts', (req, res) => {
    res.send("Another endpoints")
});


//Now start listening on 3000
app.listen(3000);