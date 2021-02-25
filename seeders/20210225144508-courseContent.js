'use strict';
const fs = require('fs');

module.exports = {
  up: (queryInterface, Sequelize) => {

    let data = JSON.parse(fs.readFileSync('./data/coursecontent.json', 'utf-8'))
    let newData = []
    data.forEach(courseContent => {
      courseContent.createdAt = new Date();
      courseContent.updatedAt = new Date();
      newData.push(courseContent)
    })
    return queryInterface.bulkInsert('CourseContents', newData, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CourseContents', null, {});
  }
};
