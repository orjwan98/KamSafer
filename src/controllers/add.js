// const cookie = require('cookie');
const { logs } = require('../database/models');

exports.post = (req, res) => {
  const { car_id } = req.cookies;
  const {
    purpose, note, start_km, end_km, driver_name,
  } = req.body;
  logs
    .create({
      purpose,
      note,
      start_km,
      end_km,
      driver_name,
      car_id,
      raw: true,
    })
    .then(() => {
      res.json({ added: true });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).end();
    });
};
