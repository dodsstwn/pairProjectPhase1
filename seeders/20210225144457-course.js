'use strict';
const fs = require('fs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = JSON.parse(fs.readFileSync('./data/course.json', 'utf-8'))
    let newData = []
    data.forEach(course => {
      course.createdAt = new Date();
      course.updatedAt = new Date();
      newData.push(course)
    })
    return queryInterface.bulkInsert('Courses', newData, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Courses', null, {});
  }
};
