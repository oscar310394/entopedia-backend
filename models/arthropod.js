const Sequelize = require('sequelize');

const sequelize = require('../config/database');

const Arthropod = sequelize.define(
    'arthropod', {
        id: { type: Sequelize.INTEGER, primaryKey: true },
        userId: { type: Sequelize.INTEGER, references: 'users', referencesKey: 'id' },
        orderS: { type: Sequelize.STRING, allowNull: false },
        family: { type: Sequelize.STRING, allowNull: true },
        genus: { type: Sequelize.STRING, allowNull: true },
        specie: { type: Sequelize.STRING, allowNull: true },
        commonName: { type: Sequelize.STRING, allowNull: false },
        scientificName: { type: Sequelize.STRING, allowNull: false },
        description: { type: Sequelize.STRING, allowNull: false },
        habits: { type: Sequelize.STRING, allowNull: false },
        habitat: { type: Sequelize.STRING, allowNull: false },
        impactOnHumanity: { type: Sequelize.STRING, allowNull: false },
        color: { type: Sequelize.STRING, allowNull: false },
        bodySize: { type: Sequelize.STRING, allowNull: false },
        insertDate: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW }
    }
);

module.exports = Arthropod;