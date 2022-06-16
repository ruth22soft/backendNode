'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('accusations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      accusation_title: {
        type: Sequelize.STRING
      },
      accusation_type: {
        type: Sequelize.STRING
      },
      accusation_detail: {
        type: Sequelize.TEXT
      },
      accusation_file: {  
        type: Sequelize.BLOB
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
      date: {
        type: Sequelize.DATEONLY
      },
      verifiedBy: {
        type: sequelize.STRING
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
    await queryInterface.dropTable('accusations');
  }
};