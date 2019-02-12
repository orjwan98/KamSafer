// const cookie = require('cookie');
const { logs } = require('../database/models');

exports.post = (req, res) => {
  const car_id = 1;
  const createdAt = Date.now();
  const {
    purpose, note, start_km, end_km, driver_name,
  } = req.body;
  logs.create({
    purpose, note, start_km, end_km, driver_name, car_id, createdAt, raw: true,
  })
    .then(() => {
      res.json({ message: 'Done' });
    })
    .catch(() => (res.status(500).end()));
};
