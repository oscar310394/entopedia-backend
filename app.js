const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

const userRoutes = require('./routes/user');

app.use('/users', userRoutes);

module.exports = app;