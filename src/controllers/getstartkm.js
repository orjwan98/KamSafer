const { car } = require('../database/models');

exports.get = (req, res) => {
  const car_id = req.params.car_id;
  car.findAll({
    where: { id: car_id },
    attributes: ['last_log_km'],
    raw: true,
  })
    .then((result) => {
      res.json(result);
    })
    .catch(() => (res.status(500).end()));
};

//
// const { car } = require('../database/models');
//
// exports.get = (req, res) => {
//   car.findAll({
//     attributes: ['id', 'model_color', 'car_no', 'owner', 'last_log_km'],
//     raw: true,
//   })
//     .then((result) => {
//       res.json(result);
//     })
//     .catch(() => (res.status(500).end()));
// };
