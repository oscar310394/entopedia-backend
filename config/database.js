const Sequelize = require('sequelize');

const sequelize = new Sequelize('entopedia', 'root', 'ploi753',{
    host:'localhost',
    dialect: 'mysql',
    define:{
        timestamps: false
    }
});

module.exports = sequelize;