const taskService = require('../services/taskServices');

const create = async (req, res) => {
  const { id } = req.user;
  const task = await taskService.create(id, req.body);
  return res.status(201).json(task);
};

module.exports = {
  create,
};
