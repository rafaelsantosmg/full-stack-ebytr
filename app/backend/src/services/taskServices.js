const { Task } = require('../database/models');

const create = async (userId, body) => {
  const task = await Task.create({ ...body, userId });
  return task;
};

const getAll = async (userId) => {
  const tasks = await Task.findAll({ where: { userId } });
  return tasks;
};

const getById = async (id, userId) => {
  const task = await Task.findOne({ where: { id, userId } });
  return task;
};

const update = async (id, userId, body) => {
  await Task.update({ ...body }, { where: { id, userId } });
};

const destroy = async (id, userId) => {
  await Task.destroy({ where: { id, userId } });
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  destroy,
};
