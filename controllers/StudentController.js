const { Student } = require('../models');

class StudentController {
  static loginPageStudent(req, res) {
    res.render('pageLoginforStudent')
  }

  static checkStudent(req, res) {
    let email = req.body.email
    let password = req.body.password
    
    let student = {
      email: email,
      password: password
    }

    Student.findAll()
    .then(data => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].email === student.email && data[i].password === student.password) {
          res.redirect('/course')
        } else if (i === data.length - 1) {
          res.render('errorLoginForStudent')
        }
      }
    })
    .catch(err => {
      res.send(err)
    })
  }

  static addStudent(req, res) {
    let data = {
      name: req.body.createname,
      username: req.body.createusername,
      email: req.body.createemail,
      password: req.body.createpassword
    }

    Student.create(data)
    .then(data => {
      res.redirect('/studentLogin')
    })
    .catch(err => {
      res.send(err)
    })
  }
}

module.exports = StudentController