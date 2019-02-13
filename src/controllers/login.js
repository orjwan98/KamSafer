const bcrypt = require('bcryptjs');
const Sequelize = require('sequelize');
require('env2')('.env');

exports.post = (req, res) => {
  const { username, password } = req.body;
  const hashed = process.env.password;
  const userhere = process.env.username;
  if (userhere === username) {
    bcrypt.compare(password, hashed, (err, match) => {
      if (err) {
        res.send('There was a problem HERE');
      } else {
        res.send('Success!');
      }
    });
  } else {
    res.send('Username is invalid');
  }
};
