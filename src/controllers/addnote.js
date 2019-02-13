// const cookie = require('cookie');
const { notes } = require('../database/models');

exports.post = (req, res) => {
  const { name } = req.body;
  notes.create({
    name, raw: true,
  })
    .then(() => {
      res.json({ message: 'Done' });
    })
    .catch(() => (res.status(500).end()));
};
