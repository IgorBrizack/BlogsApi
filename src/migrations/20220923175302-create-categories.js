'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Categories', { id: Sequelize.INTEGER });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('users');
   
  }
};
