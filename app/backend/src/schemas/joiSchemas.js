const Joi = require('joi');

const validateUser = Joi.object({
  displayName: Joi.string().min(5),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const validateLogin = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const validateTask = Joi.object({
  title: Joi.string(),
  content: Joi.string(),
  status: Joi.string(),
});

module.exports = {
  validateUser,
  validateLogin,
  validateTask,
};
