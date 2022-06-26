const { decodeToken } = require('../utils/tokenJWT');
const { User } = require('../database/models');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const { user } = decodeToken(token);
  if (!user) {
    return res.status(401).json({ message: 'Invalid token' });
  }
  const findUser = await User.findOne({
    where: { email: user.email },
    attributes: { exclude: 'password' },
  });
  if (!findUser) {
    return res.status(404).json({ message: 'User not found' });
  }
  req.user = user;
  next();
};
