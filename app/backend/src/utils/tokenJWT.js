const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET || 'MinhaSuperFraseSecreta';

const generateToken = (user) =>
  jwt.sign({ user }, JWT_SECRET, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });

const decodeToken = (token) => jwt.verify(token, JWT_SECRET);

module.exports = {
  generateToken,
  decodeToken,
};
