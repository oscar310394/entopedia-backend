const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

const userRoutes = require('./routes/user');
const arthropodRoutes = require('./routes/arthropod');

app.use('/users', userRoutes);
app.use('/arthropods', arthropodRoutes);

module.exports = app;