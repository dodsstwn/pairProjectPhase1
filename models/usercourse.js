'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserCourse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserCourse.belongsTo(models.Student, {foreignKey: "StudentsId"})
      UserCourse.belongsTo(models.CourseContent, {foreignKey: "CourseContentId"})
    }
  };
  UserCourse.init({
    courseContentId: DataTypes.INTEGER,
    studentsId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserCourse',
  });
  return UserCourse;
};