const { expect } = require("chai");
const sinon = require('sinon');
const UserService = require('../../../src/services/userServices');
const LoginService = require('../../../src/services/loginServices');
const { User } = require('../../../src/database/models');
const mocks = require('../mocks/mocks');

describe('Service - Rota "/users"', () => {
  describe('Valida a função create', () => {
    before(() => {
      sinon.stub(User, 'create').resolves(mocks.createUserResolves);
      sinon.stub(User, 'findOne').resolves(mocks.findUserReject);
    })
  
    after(() => {
      User.create.restore();
      User.findOne.restore();
    })
  
    it('Valida se nome ja existe', async () => {
      try {
        await UserService.create(mocks.createUser);
      } catch (error) {
        expect(error.message).to.be.equals('User alread exists!');
      }
    });
  });
  describe('Valida se usuário é criado!', () => {
    before(() => {
      sinon.stub(User, 'findOne').resolves(null);
      sinon.stub(User, 'create').resolves(mocks.createUserResolves);
    })
  
    after(() => {
      User.findOne.restore();
      User.create.restore();
    })
  
    it('Valida se cria o usuário e retorna um token', async () => {
      const user = await UserService.create(mocks.createUser);
      expect(user).to.be.a('string');
    });
  });
});

describe('Service - Rota "/login"', () => {
  describe('Valida a função Login reject', () => {
    before(() => {
      sinon.stub(User, 'findOne').resolves(null);
    })
  
    after(() => {
      User.findOne.restore();
    })
  
    it('Valida usuário não existe', async () => {
      try {
        await LoginService.login(mocks.login);
      } catch (error) {
        expect(error.message).to.be.equals('User not found!');
      }
    });
  });
});