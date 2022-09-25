const { User } = require('../models');

const insertUserService = async ({ displayName, email, password, image }) => {
  const isDuplicated = await User.findOne({ where: { email } });
 
  if (isDuplicated) return false;

  const usersData = await User.create({ displayName, email, password, image });
  
  return usersData;
};

const getAllUsersService = async () => {
  const allUsers = await User.findAll({ attributes: { exclude: ['password'] } });

  return allUsers;
};

const getUserByIdService = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });

  if (!user) return false;

  return user;
};

module.exports = {
  insertUserService,
  getAllUsersService,
  getUserByIdService,
};