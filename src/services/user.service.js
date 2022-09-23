const { User } = require('../models');

const insertUserService = async ({ displayName, email, password, image }) => {
  const isDuplicated = await User.findOne({ where: { email } });
 
  if (isDuplicated) return false;
  
  const usersData = await User.create({ displayName, email, password, image });
  
  return usersData;
};

module.exports = {
  insertUserService,
};