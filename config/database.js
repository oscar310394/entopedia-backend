const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ploi753',
    database: 'entopedia'
});

module.exports = connection;