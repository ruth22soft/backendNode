'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('userAccusations', {
     
      date: {
        type: Sequelize.DATE
      },
      accusor: {
        type: Sequelize.STRING
      },
      accused: {
        type: Sequelize.STRING
      },
      witness1: {
        type: Sequelize.STRING
      },
      witness2: {
        type: Sequelize.STRING
      },
      witness3: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('userAccusations');
  }
};