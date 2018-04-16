const cors = require('cors');
const express = require('express');

const app = express();

const userRoutes = require('./routes/user');
const calendarRoures = require('./routes/calendar');
const arthropodRoutes = require('./routes/arthropod');

//Settings
app.set('port', process.env.PORT || 3000);


//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/entopedia',userRoutes);
app.use('/entopedia',calendarRoures);
app.use('/entopedia',arthropodRoutes);


app.listen(app.get('port'));

