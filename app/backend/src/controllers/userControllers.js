const userService = require('../services/userServices');

const create = async (req, res) => {
  await userService.create(req.body);
  return res.status(201).json({ message: 'Sucess' });
};

module.exports = {
  create,
};
