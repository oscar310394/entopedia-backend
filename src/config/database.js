const mysql = require('mysql2');

exports.Connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "ploi753",
    database: "entopedia"
});

