const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config');

//Added Json Body-parser
app.use(bodyParser.json());

//Import Routes
const userRoute = require('./routes/users');
app.use('/user', userRoute)

//Initial route
app.get('/', (req, res) => {
    res.send('Welcome to the banking app');
});

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true }, () => {
    console.log('connected to db')
});

//Start listening
app.listen(8080);
