const car = require('./car');
const logs = require('./logs');
const notes = require('./notes');

const db = require('../config/db_connection');

logs.belongsTo(car, {
  onDelete: 'CASCADE',
  foreignKey: 'car_id',
  targetKey: 'id',
});

logs.belongsTo(notes, {
  onDelete: 'CASCADE',
  foreignKey: 'note_id',
  targetKey: 'id',
});

const seq = new Promise((resolve, reject) => {
  db.sync()
    .then(() => {
      resolve();
    })
    .catch((err) => {
      reject(err);
    });
});

module.exports = {
  car,
  logs,
  notes,
  seq,
};
