const router = require('express').Router();
const routerUser = require('./userRouter');
const routerLogin = require('./loginRouter');
const routerTask = require('./taskRouter');

router.use('/login', routerLogin);
router.use('/users', routerUser);
router.use('/tasks', routerTask);

module.exports = router;
