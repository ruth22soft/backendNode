'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  message.init({
   
    content: DataTypes.STRING,
    file: DataTypes.STRING,
    message_status: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    user_id: DataTypes.INTEGER,
    admin_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'message',
  });
  return message;
};