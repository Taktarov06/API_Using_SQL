'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categoty extends Model {
    static associate(models) {
      Categoty.hasMany(models.Curse, {
        foreignKey: 'category_id'
      });
    }
  }
  Categoty.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categoty',
    tableName: 'categoties',
    paranoid: true,
  });
  return Categoty;
};