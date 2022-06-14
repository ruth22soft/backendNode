'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  notification.init({
    notification_title: DataTypes.STRING,
    notification_type: DataTypes.STRING,
    content: DataTypes.TEXT,
    source: DataTypes.STRING,
    created: DataTypes.DATE,
    updated: DataTypes.DATE,
    admin_id: DataTypes.INTEGER,
    student_id: DataTypes.INTEGER,
    employee_id: DataTypes.INTEGER,


  }, {
    sequelize,
    modelName: 'notification',
  });
  return notification;
};