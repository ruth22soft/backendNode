'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class accusation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  accusation.init({
    accusation_title: DataTypes.STRING,
    accusation_type: DataTypes.STRING,
    accusation_detail: DataTypes.TEXT,
    accusation_file: DataTypes.STRING,
    accusor: DataTypes.STRING,//accusors are always employees(it is better to use either full name or id) and it is a foreign key from employee names
    accused: DataTypes.STRING,//accused can be students or employees and it is a foreign  key from student and employee names
    witness1: DataTypes.STRING,
    witness2: DataTypes.STRING,
    witness3: DataTypes.STRING,
    verifiedBy: DataTypes.STRING,///this need to have the default value of the logged in admin
    date: DataTypes.DATEONLY,
  }, {
    sequelize,
    modelName: 'accusation',
  });
  return accusation;
};