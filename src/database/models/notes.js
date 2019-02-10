const Sequelize = require('sequelize');

const seq = require('../config/db_connection');

const notes = seq.define(
  'notes',
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { timestamps: false },
);

module.exports = notes;
