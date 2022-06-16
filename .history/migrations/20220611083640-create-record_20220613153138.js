'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('records', {
     
      record_name: {
        type: Sequelize.STRING
      },
      record_type: {
        type: Sequelize.STRING
      },
      record_duration: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
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
    await queryInterface.dropTable('records');
  }
};