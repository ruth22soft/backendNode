'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    first_name: DataTypes.STRING,
    middle_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    user_name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    date_of_birth: DataTypes.DATE,
    sex: DataTypes.STRING,
    city: DataTypes.STRING,
    wereda: DataTypes.STRING,
    house_no: DataTypes.STRING,
    emergency_contact_full_name: DataTypes.STRING,
    emergency_contact_phone: DataTypes.STRING,
    date_of_entrance: DataTypes.DATEONLY,
    complain_id: DataTypes.INTEGER,
    conversation_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};