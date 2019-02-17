const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('env2')('.env');

exports.post = (req, res) => {
  const { username, password } = req.body;
  const hashed = process.env.password;
  const userhere = process.env.username;
  const secret = process.env.SECRET;
  if (userhere === username) {
    bcrypt.compare(password, hashed, (err, match) => {
      if (err) {
        res.json({ logged: false });
      } else {
        const token = jwt.sign(
          {
            username,
          },
          secret,
        );
        res.cookie('logged_in', token, {
          maxAge: 99999,
        }),
        res.json({ logged: true });
      }
    });
  } else {
    res.json({ logged: false });
  }
};
