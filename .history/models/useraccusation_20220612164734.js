'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userAccusation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  userAccusation.init({
    date: DataTypes.DATE,
    accusor: DataTypes.STRING,
    accused: DataTypes.STRING,
    witness1: DataTypes.STRING,
    witness2: DataTypes.STRING,
    witness3: DataTypes.STRING,
    admin_id: DataTypes.INTEGER,
    student_id: DataTypes.INTEGER,
    employee_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'userAccusation',
  });
  return userAccusation;
};