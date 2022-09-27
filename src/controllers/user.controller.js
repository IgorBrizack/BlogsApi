const UserService = require('../services/user.service');
const generateToken = require('../generateToken/generateToken');

const insertUserController = async (req, res) => {
  const userData = req.body;
  const data = await UserService.insertUserService(userData);

  if (!data) return res.status(409).json({ message: 'User already registered' });

  const token = generateToken.generateUserToken(data);

  res.status(201).json({ token });
};

const getAllUsers = async (_req, res) => {
  const data = await UserService.getAllUsersService();
  res.status(200).json(data);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const userData = await UserService.getUserByIdService(id);
  if (!userData) return res.status(404).json({ message: 'User does not exist' });
  res.status(200).json(userData);
};

const deleteUser = async (req, res) => {
  const payload = req.user;

  const userId = await UserService.getLogedUserService(payload);

  await UserService.deleteUserService(userId);

  res.sendStatus(204);
};

module.exports = {
  insertUserController,
  getAllUsers,
  getUserById,
  deleteUser,
};