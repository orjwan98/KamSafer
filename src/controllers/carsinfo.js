const { car } = require('../database/models');

exports.get = (req, res) => {
  const { car_id } = req.cookies;
  car.findAll({
    where: { id: car_id },
    attributes: ['model_color', 'car_no', 'owner', 'last_log_km'],
    raw: true,
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      (res.status(500).end());
    });
};
