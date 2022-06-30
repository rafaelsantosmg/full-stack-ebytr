const taskService = require('../services/taskServices');

const create = async (req, res) => {
  const { id } = req.user;
  const task = await taskService.create(id, req.body);
  return res.status(201).json(task);
};

const getAll = async (req, res) => {
  const { id } = req.user;
  const tasks = await taskService.getAll(id);
  return res.status(200).json(tasks);
};

module.exports = {
  create,
  getAll,
};
