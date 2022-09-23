const UserService = require('../services/user.service');

const getAllUser = async (req, res) => {
  const data = await UserService.getAllUsers();
  console.log(data);
  res.status(200).json({ data });
};

module.exports = {
  getAllUser,
};