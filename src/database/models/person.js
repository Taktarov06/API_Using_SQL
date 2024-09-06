'use strict';
const {
  Model
} = require('sequelize');
const { FOREIGNKEYS } = require('sequelize/lib/query-types');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    static associate(models) {
      Person.hasMany(models.Curse, { foreignKey: 'teacher_id' });
      Person.hasMany(models.Registration, {
        foreignKey: 'student_id',
        as: 'aulasMatriculadas'
      });
    }
  }
  Person.init({
    name: DataTypes.STRING,
    cpf: DataTypes.STRING,
    email: DataTypes.STRING,
    activate: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Person',
    tableName: 'people',
    paranoid: true,
    defaultScope: {
      where: { 
        activate: true, 
      }
    },
    scopes: {
      allRegister: {
        where: {}
      }
    }
  });
  return Person;
};