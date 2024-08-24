'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curse extends Model {
    static associate(models) {
      Curse.belongsTo(models.Categoty, {
        foreignKey: 'category_id'
      });
      Curse.belongsTo(models.Person, {
        foreignKey: 'teacher_id'
      });
      Curse.hasMany(models.Registration, {
        foreignKey: 'curse_id'
      });
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