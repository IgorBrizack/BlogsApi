const { User } = require('../models');

const getUsers = async ({ email, password }) => {
  const usersData = await User.findOne({ where: { email } });

  if (usersData && usersData.password === password) return usersData;
  
  return false;
};

module.exports = {
  getUsers,
};