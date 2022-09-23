const UserService = require('../services/user.service');
const generateToken = require('../generateToken/generateToken');

const insertUserController = async (req, res) => {
  const userData = req.body;
  const data = await UserService.insertUserService(userData);

  if (data === 'unique violation') res.status(409).json({ message: 'User already registered' });

  const token = generateToken.generateUserToken(data);

  res.status(200).json({ token });
};

module.exports = {
  insertUserController,
};