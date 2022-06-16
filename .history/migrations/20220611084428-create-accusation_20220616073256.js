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
        type: Sequelize.DATE
      }
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      student_id: {
        type: Sequelize.INTEGER
      },
      employee_id: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('accusations');
  }
};