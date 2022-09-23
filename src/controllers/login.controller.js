const LoginService = require('../services/login.service');

const getToken = async (req, res) => {
  const loginData = req.body;
  const data = await LoginService.getUserToken(loginData);
  console.log(data);
  res.status(200).json({ data });
};

module.exports = {
  getToken,
};