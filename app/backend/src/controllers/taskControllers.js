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

const getById = async (req, res) => {
  const { id } = req.params;
  const { id: userId } = req.user;
  const task = await taskService.getById(id, userId);
  console.log(task);
  return res.status(200).json(task);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { id: userId } = req.user;
  const tasks = await taskService.update(id, userId, req.body);
  return res.status(200).json(tasks);
};

const destroy = async (req, res) => {
  const { id } = req.params;
  const { id: userId } = req.user;
  await taskService.destroy(id, userId);
  return res.status(200).end();
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  destroy,
};
