'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostCategories', {
       post_id: {
        type:Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
       }, 
       category_id: {
        type:Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
       }  
      });
   
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.dropTable('PostCategories');
   
  }
};
