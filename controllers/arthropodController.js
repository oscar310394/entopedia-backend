const Arthropod = require('../models/arthropod');

exports.getArthropod = (req, res) => {
    Arthropod.findAll({}).then((err, arthropod) => {
        if (err) res.send(err);
        res.json(arthropod);
    });
}

exports.saveArthropod = (req, res) => {
    let newArthropod = new Arthropod(req.body);
    newArthropod.save({}).then((err, arthropod) => {
        if (err) res.send(err);
        res.json(arthropod);
    });
}

exports.getArthropodById = (req, res) => {
    Arthropod.findById(req.params.id).then((err, arthropod) => {
        if (err) res.send(err);
        res.json(arthropod);
    });
}

exports.updateArthropod = (req, res) => {
    let updateValues = req.body;
    Arthropod.update(updateValues, { where: { id: req.params.id } }).then((err, arthropod) => {
        if (err) res.send(err);
        res.json(arthropod);
    });
}

exports.deleteArthropod = (req, res) => {
    Arthropod.destroy({ where: { id: req.params.id } }).then(() => {
        res.status(200).json({
            message: "Is deleted"
        });
    });
}