const { Task } = require('../database/models');

const create = async (body) => {
  const task = await Task.create(body);
  return task;
};

module.exports = {
  create,
};
