const router = require('express').Router();
const userController = require('../controllers/userControllers');

router.post('/', userController.create);

module.exports = router;
