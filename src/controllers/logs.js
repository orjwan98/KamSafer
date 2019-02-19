const Sequelize = require('sequelize');
const { logs } = require('../database/models');

const Op = Sequelize.Op;
exports.get = (req, res) => {
  const { car_id } = req.cookies;
  const year = req.params.year;
  const month = req.params.month;
  const from = new Date(year, month - 1, 1).toISOString();
  const to = new Date(year, month, 1).toISOString();
  logs.findAll({
    where: {
      createdAt: {
        [Op.between]: [from, to],
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
