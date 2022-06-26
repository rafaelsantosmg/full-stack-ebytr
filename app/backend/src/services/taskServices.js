const { Task } = require('../database/models');

const create = async (userId, body) => {
  const task = await Task.create({ ...body, userId });
  return task;
};

module.exports = {
  create,
};
