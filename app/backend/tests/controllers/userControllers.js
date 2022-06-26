const { expect } = require('chai');
const sinon = require('sinon');
const UserController = require('../../src/controllers/userControllers');
const UserService = require('../../src/services/userServices');
const mocks = require('../helpers/mocks');

describe('Testa os controllers da rota /users', () => {
  const res = {};
  const req = {};

  describe('Testa a função getAll', () => {
    before(() => {
      sinon.stub(UserService, 'getAll').resolves(mocks.allUsers);
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });

    after(() => {
      UserService.getAll.restore();
    });

    it('valida resposta HTTP status 200', async () => {
      await UserController.getAll(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });
    it('valida se retorna todos os produtos', async () => {
      await UserController.getAll(req, res);
      expect(res.json.calledWith(mocks.allUsers)).to.be.equal(true);
    });
  });

  describe('Testa a função getById', () => {
    const res = {};
    const req = {};

    describe('Testa se houve sucesso na requisição getById', () => {
      before(() => {
        sinon.stub(UserService, 'getById').resolves(mocks.findUser);
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
        req.params = sinon.stub().returns({ id: 1 });
      });

      after(() => {
        UserService.getById.restore();
      });

      it('valida resposta HTTP status 200', async () => {
        await UserController.getById(req, res);
        expect(res.status.calledWith(200)).to.be.equal(true);
      });
      it('valida se traz o retorno do produto pelo id', async () => {
        await UserController.getById(req, res);
        expect(res.json.calledWith(mocks.getUserById)).to.be.equal(true);
      });
    });

    describe('Testa se houve rejeição na requisição getById', () => {
      before(() => {
        sinon.stub(UserService, 'getById').resolves();
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
        req.params = sinon.stub().returns({ id: 8 });
      });

      after(() => {
        UserService.getById.restore();
      });

      it('valida resposta HTTP status 404', async () => {
        try {
          await UserController.getById(req, res);
        } catch (error) {
          expect(error.status).to.be.equal(404);
        }
      });

      it('valida se teve a resposta correta da mensagem de erro', async () => {
        try {
          await UserController.getById(req, res);
        } catch (error) {
          expect(error.message).to.be.equals('Product not found');
        }
      });
    });
  });

  describe('Testa a função create', () => {
    const res = {};
    const req = {};

    describe('Testa se houve sucesso na requisição create', () => {
      before(() => {
        sinon.stub(UserService, 'create').resolves(1);
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
        req.body = mocks.createUser;
      });

      after(() => {
        UserService.create.restore();
      });

      it('valida resposta HTTP status 201', async () => {
        await UserController.create(req, res);
        expect(res.status.calledWith(201)).to.be.equal(true);
      });
      it('valida se traz o retorno do produto criado', async () => {
        await UserController.create(req, res);
        expect(res.json.calledWith(mocks.createUser)).to.be.equal(true);
      });
    });

    describe('Testa se houve rejeição na requisição create', () => {
      before(() => {
        sinon.stub(UserService, 'create').resolves(1);
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
        req.body = mocks.createUser;
      });

      after(() => {
        UserService.create.restore();
      });

      it('valida resposta HTTP status 409', async () => {
        try {
          await UserController.create(req, res);
        } catch (error) {
          expect(error.status).to.be.equal(409);
        }
      });

      it('valida se teve a resposta correta da mensagem de erro', async () => {
        try {
          await UserController.create(req, res);
        } catch (error) {
          expect(error.message).to.be.equals('User already exists');
        }
      });
    });
  });

  describe('Testa a função update', () => {
    const res = {};
    const req = {};

    describe('Testa se houve sucesso na requisição update', () => {
      before(() => {
        sinon.stub(UserService, 'update').resolves();
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
        req.params = sinon.stub().returns({ id: 2 });
        req.body = mocks.updateUserReq;
      });

      after(() => {
        UserService.update.restore();
      });

      it('valida resposta HTTP status 200', async () => {
        await UserController.update(req, res);
        expect(res.status.calledWith(200)).to.be.equal(true);
      });
      it('valida se traz o retorno do produto criado', async () => {
        await UserController.update(req, res);
        expect(res.json.calledWith(mocks.updateUser)).to.be.equal(true);
      });
    });

    describe('Testa se houve rejeição na requisição update', () => {
      before(() => {
        sinon.stub(UserService, 'update').resolves();
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
        req.params = sinon.stub().returns({ id: 2 });
        req.body = mocks.updateUserReq;
      });

      after(() => {
        UserService.update.restore();
      });

      it('valida resposta HTTP status 404', async () => {
        try {
          await UserController.update(req, res);
        } catch (error) {
          expect(error.status).to.be.equal(404);
        }
      });

      it('valida se teve a resposta correta da mensagem de erro', async () => {
        try {
          await UserController.update(req, res);
        } catch (error) {
          expect(error.message).to.be.equals('Product not found');
        }
      });
    });
  });

  describe('Testa a função delete', () => {
    const res = {};
    const req = {};

    describe('Testa se houve sucesso na requisição delete', () => {
      before(() => {
        sinon.stub(UserService, 'destroyer').resolves();
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
        res.end = sinon.stub().returns(res);
        req.params = sinon.stub().returns({ id: 1 });
      });

      after(() => {
        UserService.destroyer.restore();
      });

      it('valida resposta HTTP status 204', async () => {
        await UserController.destroyer(req, res);
        expect(res.status.calledWith(204)).to.be.equal(true);
      });
    });

    describe('Testa se houve rejeição na requisição delete', () => {
      before(() => {
        sinon.stub(UserService, 'destroyer').resolves();
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
        res.end = sinon.stub().returns(res);
        req.params = sinon.stub().returns({ id: 1 });
      });

      after(() => {
        UserService.destroyer.restore();
      });

      it('valida resposta HTTP status 404', async () => {
        try {
          await UserController.destroyer(req, res);
        } catch (error) {
          expect(error.status).to.be.equal(404);
        }
      });

      it('valida se teve a resposta correta da mensagem de erro', async () => {
        try {
          await UserController.destroyer(req, res);
        } catch (error) {
          expect(error.message).to.be.equals('User not found');
        }
      });
    });
  });
});
