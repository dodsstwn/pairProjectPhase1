'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Student.hasMany(models.UserCourse, {foreignKey: "studentsId"})
      Student.hasMany(models.Transaction, {foreignKey: "studentsId"})

    }
  };
  Student.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
    hooks: {
      beforeCreate: (student, options) => {
        student.password += '%c1o1u1r1s1e%' 
      }
    }
  });
  return Student;
};