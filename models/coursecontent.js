'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CourseContent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CourseContent.belongsTo(models.Course, {foreignKey: "CourseId"})
      CourseContent.hasMany(models.UserCourse, {foreignKey: "courseContentId"})
    }
    getDiscount() {
      let tampilanDiskon = `${this.discount}%`
      return tampilanDiskon 
    }
  };
  CourseContent.init({
    course_name: DataTypes.STRING,
    release_year: DataTypes.STRING,
    duration: DataTypes.STRING,
    price: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    CourseId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CourseContent',
  });
  return CourseContent;
};