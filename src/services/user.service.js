const { User } = require('../models');

const insertUserService = async ({ displayName, email, password, image }) => {
  const usersData = await User.create({ displayName, email, password, image });

  console.log(usersData);
  if (usersData.errors[0].type === 'unique violation') {
    return usersData.errors[0].type;
  }
  return usersData;
};

module.exports = {
  insertUserService,
};