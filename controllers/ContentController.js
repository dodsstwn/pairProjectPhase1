const { Course, CourseContent } = require('../models');

class ContentController {
  static findAll(req, res) {
    CourseContent.findAll({
      include: {
        model: Course
      },
      order: [["id", "ASC"]]
    })
    .then(data => {
      res.render('showContent', {data})
    })
    .catch(err => {
      res.send(err)
    })
  }
}

module.exports = ContentController