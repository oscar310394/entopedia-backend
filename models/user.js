const Sequelize = require('sequelize');

const sequelize = require('../config/database');


const User = sequelize.define(
    'user', {
        id: { type: Sequelize.INTEGER, primaryKey: true },
        name: { type: Sequelize.STRING, allowNull: false },
        firstSurname: { type: Sequelize.STRING, allowNull: false },
        secondSurname: { type: Sequelize.STRING, allowNull: false },
        phoneNumber: { type: Sequelize.INTEGER, allowNull: false },
        email: { type: Sequelize.STRING, allowNull: false },
        occupation: { type: Sequelize.STRING, allowNull: false },
        password: { type: Sequelize.STRING, allowNull: false },
        isAdmi: { type: Sequelize.BOOLEAN, allowNull: false },
        active: { type: Sequelize.BOOLEAN, allowNull: false }
    }
);

module.exports = User;