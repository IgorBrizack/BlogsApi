'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('categories', {
      id: { 
      type:Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      },
      name: Sequelize.STRING,
        
     });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('categories');
   
  }
};
