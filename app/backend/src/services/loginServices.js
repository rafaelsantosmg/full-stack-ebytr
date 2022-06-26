const { User } = require('../database/models');
const newError = require('../utils/newError');
const { compareHash } = require('../utils/bcryptGenerate');
const { generateToken } = require('../utils/tokenJWT');

const login = async (body) => {
  const { displayName, email, password } = body;
  const user = await User.findOne({ where: { email } });
  if (!user) throw newError(404, 'User not found!');
  const validPassword = await compareHash(password, user.password);
  if (!validPassword) throw newError(401, 'Incorrect email or password');
  const token = generateToken({ id: user.id, displayName, email });
  return token;
};

module.exports = {
  login,
};
