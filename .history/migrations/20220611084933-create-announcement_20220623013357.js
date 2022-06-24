'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('announcements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      announcement_type: {
        type: Sequelize.STRING
      },
      detail: {
        type: Sequelize.TEXT
      },
      file: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATEONLY
      },
      approved: {
        type: Sequelize.STRING
      },
      admin_id: {
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
    await queryInterface.dropTable('announcements');
  }
};