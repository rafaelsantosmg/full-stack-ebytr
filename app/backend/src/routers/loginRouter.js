const rescue = require('express-rescue');
const router = require('express').Router();
const loginController = require('../controllers/loginControllers');
const validateRequest = require('../middlewares/validateRequest');
const { validateLogin } = require('../schemas/joiSchemas');

router.post('/', validateRequest(validateLogin), rescue(loginController.login));

module.exports = router;
