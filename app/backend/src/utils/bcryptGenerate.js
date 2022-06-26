const bcrypt = require('bcrypt');

const saltRounds = 10;

const generateHash = (password) => {
  const hash = bcrypt.hashSync(password, saltRounds);
  return hash;
};

module.exports = generateHash;
