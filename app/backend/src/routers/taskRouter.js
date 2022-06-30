const rescue = require('express-rescue');
const router = require('express').Router();
const taskController = require('../controllers/taskControllers');
const authenticate = require('../authentication/authenticate');
const validateRequest = require('../middlewares/validateRequest');
const { validateTask } = require('../schemas/joiSchemas');

router.post(
  '/',
  authenticate,
  validateRequest(validateTask),
  rescue(taskController.create),
);

router.get(
  '/',
  authenticate,
  rescue(taskController.getAll),
);

module.exports = router;
