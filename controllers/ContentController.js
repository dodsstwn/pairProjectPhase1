const { Course, CourseContent } = require('../models');
const totalHarga = require('../helper/totalharga');

class ContentController {
  static findAll(req, res) {
    CourseContent.findAll({
      include: {
        model: Course
      },
      order: [["id", "ASC"]]
    })
    .then(data => {
      res.render('showContent', {data, format: totalHarga})
    })
    .catch(err => {
      res.send(err)
    })
  }
}

module.exports = ContentController