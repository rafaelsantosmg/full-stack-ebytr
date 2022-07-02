const { expect } = require('chai');
const sinon = require('sinon');
const UserController = require('../../../src/controllers/userControllers');
const UserService = require('../../../src/services/userServices');
const mocks = require('../mocks/mocks');

describe('Testa os controllers da rota /users', () => {
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
      const token = await UserController.create(req, res);
      expect(token).to.be.an('object');
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
