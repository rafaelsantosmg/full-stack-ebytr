const { User } = require('../database/models');
const newError = require('../utils/newError');
const generateHash = require('../utils/bcryptGenerate');
const { generateToken } = require('../utils/tokenJWT');

const create = async (body) => {
  const { displayName, email } = body;
  const password = generateHash(body.password);
  const user = await User.findOne({ where: { email } });
  if (user) throw newError(409, 'User alread exists!');
  const { id } = await User.create({ displayName, email, password });
  const token = generateToken({ id, displayName, email });
  return token;
};

module.exports = {
  create,
};
