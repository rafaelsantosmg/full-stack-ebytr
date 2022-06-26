const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (user) =>
  jwt.sign({ user }, process.env.JWT_SECRET, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });

const decodeToken = (token) => jwt.verify(token, process.env.JWT_SECRET);

module.exports = {
  generateToken,
  decodeToken,
};
