const router = require('express').Router();
const routerUser = require('./userRouter');
const routerLogin = require('./loginRouter');

router.use('/login', routerLogin);
router.use('/users', routerUser);

module.exports = router;
