const rescue = require('express-rescue');
const router = require('express').Router();
const userController = require('../controllers/userControllers');
const validateRequest = require('../middlewares/validateRequest');
const { validateUser } = require('../schemas/joiSchemas');

router.post('/', validateRequest(validateUser), rescue(userController.create));

module.exports = router;
