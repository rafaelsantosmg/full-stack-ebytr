const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const UserModel = require('../../../src/database/models/user');

describe('Testa o model de User', () => {
  const User = UserModel(sequelize, dataTypes);
  const user = new User();

  describe('Se possui o nome "User"', () => {
    checkModelName(User)('User');
  });

  describe('Se possui as propriedades "displayName" e "email"', () => {
    ['displayName', 'email'].forEach(checkPropertyExists(user));
  });
});