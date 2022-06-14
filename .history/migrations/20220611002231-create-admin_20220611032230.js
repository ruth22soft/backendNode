'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('admins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      admin_type: {
        type: Sequelize.STRING
      },
      admin_password: {
        type: Sequelize.STRING
      },
      accusation_id: {
        type: Sequelize.INTEGER
      },
      notification_id: {
        type: Sequelize.INTEGER
      },
      announcement_id: {
        type: Sequelize.INTEGER
      },
      schedule_id: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('admins');
  }
};