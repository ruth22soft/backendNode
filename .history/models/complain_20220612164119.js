'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class complain extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  complain.init({
    complain_title: DataTypes.STRING,
    description: DataTypes.TEXT,
    admin_id: DataTypes.INTEGER,
    student_id: DataTypes.INTEGER,
    employee_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'complain',
  });
  return complain;
};