const db = require('../config/database').Connection;

exports.get = (req, res, next) => {
    let sql = "SELECT * FROM arthropods";
    db.query(sql, (err, arthropods) => {
        if (err) return next(err);
        res.json(arthropods);
    });
}

exports.save = (req, res, next) => {
    let arthropod = req.body;
    let sql = "INSERT INTO arthropods SET ?";
    db.query(sql, arthropod, (err, arthropod) => {
        if (err) return next(err);
        res.json(arthropod);
    });
}

exports.get_by_id = (req, res, next) => {
    let sql = "SELECT * FROM arthropods WHERE id = ?";
    db.query(sql, req.params.id, (err, arthropod) => {
        if (err) return next(err);
        res.json(arthropod);
    });
}

exports.update = (req, res, next) => {
    let arthropod = req.body;
    let sql = "UPDATE arthropods SET ? WHERE id = ?";
    db.query(sql, [arthropod, req.params.id], (err, arthropod) => {
        if (err) return next(err);
        res.json(arthropod);
    });
}

/*
exports.delete = (req, res, next) => {
    let user = req.body;
    let sql = "UPDATE users SET active = ? WHERE id = ?";
    db.query(sql, [user, req.params.id], (err, user) => {
        if (err) return next(err);
        res.json(user);
    });
}
*/


