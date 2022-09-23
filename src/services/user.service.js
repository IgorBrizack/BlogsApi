const userModel = require('../models/User');

const getAllUsers = async () => {
  const usersData = await userModel.findAll();
  return usersData;
};

module.exports = {
  getAllUsers,
};