const { User } = require('../database/models');
const generateHash = require('../utils/bcryptGenerate');

const create = async (body) => {
  const { displayName, email } = body;
  const password = generateHash(body.password);
  const user = await User.findOne({ where: { email } });
  if (user) throw new Error('User alread exists!');
  await User.create({ displayName, email, password });
};

module.exports = {
  create,
};
