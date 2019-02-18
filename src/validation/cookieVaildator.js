const jwt = require('jsonwebtoken');

const cookiesValidator = (req, res, next) => {
  const { SECRET } = process.env;
  jwt.verify(req.cookies.logged_in, SECRET, (error, result) => {
    if (error) res.status(500);
    else {
      req.id = result.id;
      next();
    }
  });
};
module.exports = cookiesValidator;
