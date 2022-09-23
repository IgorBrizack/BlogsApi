const { User } = require('../models');

const getAllUsers = async () => {
  const usersData = await User.findAll();
  return usersData;
};

module.exports = {
  getAllUsers,
};