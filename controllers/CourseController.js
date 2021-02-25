const { Course, CourseContent } = require('../models');

class CourseController {
  static findAll(req, res) {
    Course.findAll()
    .then(data => {
      res.render('showCategoryCourse', {data})
    })
    .catch(err => {
      res.send(err)
    })
  }
}

module.exports = CourseController