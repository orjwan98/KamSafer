const Sequelize = require('sequelize');

const seq = require('../config/db_connection');

const logs = seq.define(
  'logs',
  {
    purpose: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    note: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    start_km: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    end_km: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    driver_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    car_id: {
      type: Sequelize.INTEGER,
    },
    createdAt: {
      type: Sequelize.DATE(3),
      defaultValue: Sequelize.literal('NOW()'),
    },
  },
  { timestamps: false },
);

module.exports = logs;
