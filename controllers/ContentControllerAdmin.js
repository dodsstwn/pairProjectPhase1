const { Course, CourseContent } = require('../models');

class ContentControllerAdmin {
  static findAll(req, res) {
    Course.findOne({
      where: {id : +req.params.id}
    })
    .then(data => {
      // res.send(data)
      return CourseContent.findAll({
        where: { CourseId : data.id },
        order: [["id", "ASC"]]
      })
    })
    .then(data => {
      res.render('showContentAdmin', {data})
    })
    .catch(err => {
      res.send(err)
    })
  }

  static addForm(req, res) {
    Course.findAll()
    .then(data => {
      res.render('addForm', {data})
    })
    .catch(err => {
      res.send(err)
    })
  }

  static addData(req, res) {
    let params = {
      course_name: req.body.course_name,
      release_year: req.body.release_year,
      duration: req.body.duration,
      price: req.body.price,
      discount: req.body.discount,
      CourseId: +req.body.category
    }

    CourseContent.create(params)
    .then(data => {
      res.redirect(`/adminContent/${data.CourseId}`)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static editForm (req, res) {
    let id = +req.params.id

    CourseContent.findOne({
      include: {
        model: Course
      },
      where: {id}
    })
    .then(data1 => {
      Course.findAll()
      .then(data2 => {
        res.render('editForm', {data1, data2})
        // res.send({data1, data2})
      })
    })
    .catch(err => {
      res.send(err)
    })
  }

  static editData(req, res) {
    let id = +req.params.id

    let newData = {
      course_name: req.body.course_name,
      release_year: req.body.release_year,
      duration: req.body.duration,
      price: +req.body.price,
      discount: +req.body.discount,
      CourseId: +req.body.category
    }
    // res.send(newData)

    CourseContent.update(newData, {where : { id }})
    .then(data => {
      res.redirect(`/adminContent/${newData.CourseId}`)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static deleteData(req, res) {
    let id = +req.params.id
    let temp
    CourseContent.findOne({
      where: {id}
    })
    .then(data => {
      // res.send(data)
      temp = data['CourseId']
      // console.log(data['CourseId'])
      return CourseContent.destroy({
        where: {id: req.params.id}
      })
    })
    .then(data => {
      console.log(temp)
      res.redirect(`/adminContent/${temp}`)
    })
    .catch(err => {
      res.send(err)
    })
  }
}

module.exports = ContentControllerAdmin