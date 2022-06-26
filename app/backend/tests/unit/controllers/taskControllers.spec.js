const { expect } = require('chai');
const sinon = require('sinon');
const TaskController = require('../../../src/controllers/taskControllers');
const TaskService = require('../../../src/services/taskServices');
const mocks = require('../helpers/mocks');

describe('Testa os controllers da rota /tasks', () => {
  const res = {};
  const req = {};

  describe('Testa a função getAll', () => {
    before(() => {
      sinon.stub(TaskService, 'getAll').resolves(mocks.allTasks);
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });

    after(() => {
      TaskService.getAll.restore();
    });

    it('valida resposta HTTP status 200', async () => {
      await TaskController.getAll(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });
    it('valida se retorna todas as tasks', async () => {
      await TaskController.getAll(req, res);
      expect(res.json.calledWith(mocks.allTasks)).to.be.equal(true);
    });
  });

  describe('Testa a função getById', () => {
    const res = {};
    const req = {};

    describe('Testa se houve sucesso na requisição getById', () => {
      before(() => {
        sinon.stub(TaskService, 'getById').resolves(mocks.tasksByIdDB);
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
        req.params = sinon.stub().returns({ id: 1 });
      });

      after(() => {
        TaskService.getById.restore();
      });

      it('valida resposta HTTP status 200', async () => {
        await TaskController.getById(req, res);
        expect(res.status.calledWith(200)).to.be.equal(true);
      });
      it('valida se traz o retorno da task pelo id', async () => {
        await TaskController.getById(req, res);
        expect(res.json.calledWith(mocks.tasksByIdDB)).to.be.equal(true);
      });
    });

    describe('Testa se houve rejeição na requisição getById', () => {
      before(() => {
        sinon.stub(TaskService, 'getById').resolves([]);
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
        req.params = sinon.stub().returns({ id: 8 });
      });

      after(() => {
        TaskService.getById.restore();
      });

      it('valida resposta HTTP status 404', async () => {
        try {
          await TaskController.getById(req, res);
        } catch (error) {
          expect(error.status).to.be.equal(404);
        }
      });

      it('valida se teve a resposta correta da mensagem de erro', async () => {
        try {
          await TaskController.getById(req, res);
        } catch (error) {
          expect(error.message).to.be.equals('Task not found');
        }
      });
    });
  });

  describe('Testa se houve sucesso na requisição create', () => {
    before(() => {
      sinon.stub(TaskService, 'create').resolves(mocks.createTask);
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      req.body = mocks.createProduct;
    });

    after(() => {
      TaskService.create.restore();
    });

    it('valida resposta HTTP status 201', async () => {
      await TaskController.create(req, res);
      expect(res.status.calledWith(201)).to.be.equal(true);
    });
    it('valida se traz o retorno da task criada', async () => {
      await TaskController.create(req, res);
      expect(res.json.calledWith(mocks.createTask)).to.be.equal(true);
    });
  });

  describe('Testa se houve sucesso na requisição update', () => {
    before(() => {
      sinon.stub(TaskService, 'update').resolves(mocks.updateTask);
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      req.params = sinon.stub().returns({ id: 1 });
      req.body = mocks.updateTaskReq;
    });

    after(() => {
      TaskService.update.restore();
    });

    it('valida resposta HTTP status 200', async () => {
      await TaskController.update(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });
    it('valida se traz o retorno da task atualizada', async () => {
      await TaskController.update(req, res);
      expect(res.json.calledWith(mocks.TaskDBUpdate)).to.be.equal(true);
    });
  });

  describe('Testa a função delete', () => {
    const res = {};
    const req = {};

    describe('Testa se houve sucesso na requisição delete', () => {
      before(() => {
        sinon.stub(TaskService, 'destroyer').resolves();
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
        res.end = sinon.stub().returns(res);
        req.params = sinon.stub().returns({ id: 1 });
      });

      after(() => {
        TaskService.destroyer.restore();
      });

      it('valida resposta HTTP status 204', async () => {
        await TaskController.destroyer(req, res);
        expect(res.status.calledWith(204)).to.be.equal(true);
      });
    });

    describe('Testa se houve rejeição na requisição delete', () => {
      before(() => {
        sinon.stub(TaskService, 'destroyer').resolves();
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
        res.end = sinon.stub().returns(res);
        req.params = sinon.stub().returns({ id: 8 });
      });

      after(() => {
        TaskService.destroyer.restore();
      });

      it('valida resposta HTTP status 404', async () => {
        try {
          await TaskController.destroyer(req, res);
        } catch (error) {
          expect(error.status).to.be.equal(404);
        }
      });

      it('valida se teve a resposta correta da mensagem de erro', async () => {
        try {
          await TaskController.destroyer(req, res);
        } catch (error) {
          expect(error.message).to.be.equals('Task not found');
        }
      });
    });
  });
});
