const routerUser = require('./userRouter');

routerUser.use('/users', routerUser);

module.exports = {
  routerUser,
};
