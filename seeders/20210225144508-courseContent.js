'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    courseContents.forEach(courseContent => {
      courseContent.createdAt = new Date();
      courseContent.updatedAt = new Date();
    })
    return queryInterface.bulkInsert('CourseContents', courseContents, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CourseContents', null, {});
  }
};
