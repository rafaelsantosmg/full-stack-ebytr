const userService = require('../services/userServices');

const create = async (req, res) => {
  const token = await userService.create(req.body);
  return res.status(201).json({ token });
};

module.exports = {
  create,
};
