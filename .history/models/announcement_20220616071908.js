'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class announcement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  announcement.init({
    announcement_type: DataTypes.STRING,
    detail: DataTypes.TEXT,
    file: DataTypes.BLOB,
    date: DataTypes.DATEONLY,
    approved: DataTypes.STRING,
    admin_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'announcement',
  });
  return announcement;
};