'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hearingSchedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hearingSchedule.init({
    hearing_type: DataTypes.STRING,
    date: DataTypes.DATE,
    starting: DataTypes.DATE,
    duration: DataTypes.DOUBLE,
    description: DataTypes.TEXT,
    file: DataTypes.BLOB,
    admin_id: DataTypes.INTEGER,
    accusant_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'hearingSchedule',
  });
  return hearingSchedule;
};