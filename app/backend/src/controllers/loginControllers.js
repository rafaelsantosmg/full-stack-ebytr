const loginService = require('../services/loginServices');

const login = async (req, res) => {
  const response = await loginService.login(req.body);
  return res.status(200).json(response);
};

module.exports = {
  login,
};
