const bcrypt = require('bcrypt');

const saltRounds = 10;

const generateHash = (password) => {
  const hash = bcrypt.hashSync(password, saltRounds);
  return hash;
};

const compareHash = (password, hashPassword) => {
  const hash = bcrypt.compare(password, hashPassword);
  return hash;
};

module.exports = {
  generateHash,
  compareHash,
};
