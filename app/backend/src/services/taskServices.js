const { Task } = require('../database/models');

const create = async (userId, body) => {
  const task = await Task.create({ ...body, userId });
  return task;
};

const getAll = async (userId) => {
  const tasks = await Task.findAll({ where: { userId } });
  return tasks;
};

module.exports = {
  create,
  getAll,
};
