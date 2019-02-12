const Sequelize = require('sequelize');
const { logs } = require('../database/models');

const Op = Sequelize.Op;
exports.get = (req, res) => {
  console.log(req.params.year);
  console.log(req.params.month);
  const car_id = 1;
  logs.findAll({
    where: {
      createdAt: {
        [Op.between]: ['2019-02-10T22:00:00.000Z', '2019-02-11T12:21:19.686Z'],
      },
      car_id,
    },
    attributes: ['purpose', 'note', 'start_km', 'end_km', 'driver_name', 'car_id', 'createdAt'],
    raw: true,
  })
    .then((result) => {
      res.json(result);
    })
    .catch(() => (res.status(500).end()));
};
