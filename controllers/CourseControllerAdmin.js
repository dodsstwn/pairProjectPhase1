const { Course, CourseContent } = require('../models');

class CourseControllerAdmin {
  static findAll(req, res) {
    Course.findAll({
      order: [["id", "ASC"]]
    })
    .then(data => {
      res.render('showCategoryCourseAdmin', {data})
    })
    .catch(err => {
      res.send(err)
    })
  }
}

module.exports = CourseControllerAdmin