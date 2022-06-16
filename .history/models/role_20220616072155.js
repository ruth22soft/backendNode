'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class conversation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  conversation.init({
    message_status: DataTypes.STRING,
    date: DataTypes.DATE,
    admin_id: DataTypes.INTEGER,
    student_id: DataTypes.INTEGER,
    employee_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'conversation',
  });
  return conversation;
};