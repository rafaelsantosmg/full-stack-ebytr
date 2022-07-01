const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const TaskModel = require('../../../src/database/models/task');

describe('Testa o model de Task', () => {
  const Task = TaskModel(sequelize, dataTypes);
  const task = new Task();

  describe('Se possui o nome "Task"', () => {
    checkModelName(Task)('Task');
  });

  describe('Se possui as propriedades "Title","Content", Status e Published', () => {
    ['title', 'content', 'status', 'published'].forEach(checkPropertyExists(task));
  });
});