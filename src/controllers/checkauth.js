const jwt = require('jsonwebtoken');
const cookie = require('cookie');

const { SECRET, username } = process.env;
exports.get = (req, res) => {
  if (req.headers.cookie) {
    const token = cookie.parse(req.headers.cookie).logged_in;
    jwt.verify(token, SECRET, (err, decoded) => {
      if (err) {
        return res.status(400).json({ auth: 'false' });
      }
      if (decoded === username) {
        return res.status(200).json({ auth: 'true' });
      }
      return res.status(400).json({ auth: 'false' });
    });
  }
};
