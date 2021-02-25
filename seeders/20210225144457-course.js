'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    courses.forEach(course => {
      course.createdAt = new Date();
      course.updatedAt = new Date();
    })
    return queryInterface.bulkInsert('Courses', courses, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Courses', null, {});
  }
};
