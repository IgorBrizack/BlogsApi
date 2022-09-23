const userModel = require('../models/User');

const getUserToken = async (loginData) => {
  const usersData = await userModel.findAll();
  console.log(loginData);
  return usersData;
};

module.exports = {
  getUserToken,
};