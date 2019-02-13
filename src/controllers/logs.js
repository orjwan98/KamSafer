const { logs } = require('../database/models');

exports.get = (req, res) => {
  logs.findAll({
    order: [['createdAt', 'DESC']],
    limit: 10,
    raw: true,
  })
    .then((result) => {
      res.json(result);
    })
    .catch(() => (res.status(500).end()));
};
