'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Curse.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    intial_date: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Curse',
    tableName: 'curses'
  });
  return Curse;
};