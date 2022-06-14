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
      image: {
        type: Sequelize.BLOB
      },
      file: {
        type: Sequelize.BLOB
      },
      date: {
        type: Sequelize.DATE
      },
      approved: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      admin_id: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('announcements');
  }
};