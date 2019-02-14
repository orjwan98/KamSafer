const bcrypt = require('bcryptjs');
const Sequelize = require('sequelize');
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
        res.send('There was a problem HERE');
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
        res.send('Success!');
      }
    });
  } else {
    res.send('Username is invalid');
  }
};
