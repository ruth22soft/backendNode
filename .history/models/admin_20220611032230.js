'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  admin.init({
    admin_type: DataTypes.STRING,
    admin_password: DataTypes.STRING,
    accusation_id: DataTypes.INTEGER,
    notification_id: DataTypes.INTEGER,
    announcement_id: DataTypes.INTEGER,
    schedule_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'admin',
  });
  return admin;
};