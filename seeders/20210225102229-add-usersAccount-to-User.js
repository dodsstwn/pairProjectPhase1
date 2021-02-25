'use strict';
const fs = require('fs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = JSON.parse(fs.readFileSync('./data/usersAccount.json', 'utf-8'))
    let newData = []

    data.forEach(element => {
      element.createdAt = new Date()
      element.updatedAt = new Date()
      newData.push(element)
    });
    return queryInterface.bulkInsert('Users', newData, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
