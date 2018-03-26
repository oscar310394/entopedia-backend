const User = require('../models/user');

exports.getUsers = (req, res) => {
    User.findAll({}).then((err, user) => {
        if (err) res.send(err);
        res.json(user);
    });
}

exports.saveUser = (req, res) => {
    let newUser = new User(req.body);
    newUser.save({}).then((err, user) => {
        if (err) res.send(err);
        res.json(user);
    });
}

exports.getUserById = (req, res) => {
    User.findById(req.params.id).then((err, user) => {
        if (err) res.send(err);
        res.json(user);
    });
}

exports.updateUser = (req, res) => {
    let updateValues = req.body;
    User.update(updateValues, { where: { id: req.params.id } }).then((err, user) => {
        if (err) res.send(err);
        res.json(user);
    });
}

exports.deleteUser = (req, res) => {
    User.destroy({ where: { id: req.params.id } }).then(() => {
        res.status(200).json({
            message: "is deleted"
        });
    });
}