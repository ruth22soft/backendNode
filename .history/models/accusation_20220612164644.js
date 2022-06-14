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
    accusation_detail: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'accusation',
  });
  return accusation;
};