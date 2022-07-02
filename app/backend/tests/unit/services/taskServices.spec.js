const { expect } = require("chai");
const sinon = require('sinon');
const TaskService = require('../../../src/services/taskServices');
const { Task } = require('../../../src/database/models');
const mocks = require('../mocks/mocks');

describe('Service - Rota "/tasks"', () => {
  describe('Valida a função task create', () => {
    before(() => {
      sinon.stub(Task, 'create').resolves(mocks.createTaskResolves);
    })
  
    after(() => {
      Task.create.restore();
    })
  
    it('Valida se cria a task', async () => {
      const task = await TaskService.create(mocks.createTask);
      expect(task).to.deep.equal(mocks.createTaskResolves);
    });
  });

  describe('Valida a função task getAll', () => {
    before(() => {
      sinon.stub(Task, 'findAll').resolves(mocks.allTasks);
    })
  
    after(() => {
      Task.findAll.restore();
    })
  
    it('Valida se traz todas as task', async () => {
      const tasks = await TaskService.getAll(1);
      expect(tasks).to.deep.equal(mocks.allTasks);
    });
  });

  describe('Valida a função task getById', () => {
    before(() => {
      sinon.stub(Task, 'findOne').resolves(mocks.tasksById);
    })
  
    after(() => {
      Task.findOne.restore();
    })
  
    it('Valida se traz a task pelo id', async () => {
      const task = await TaskService.getById(1);
      expect(task).to.deep.equal(mocks.tasksById);
    });
  });
});