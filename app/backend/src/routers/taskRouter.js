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
  '/:id',
  authenticate,
  rescue(taskController.getById),
);

router.get(
  '/',
  authenticate,
  rescue(taskController.getAll),
);

router.put(
  '/:id',
  authenticate,
  rescue(taskController.update),
);

router.delete(
  '/:id',
  authenticate,
  rescue(taskController.destroy),
);

module.exports = router;
