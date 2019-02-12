const { notes } = require('../database/models');

exports.get = (req, res) => {
  notes.findAll({
    attributes: ['name'],
    raw: true,
  })
    .then((result) => {
      res.json(result);
    })
    .catch(() => (res.status(500).end()));
};
