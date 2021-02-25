const { User } = require('../models');

class UserController {
  static home(req, res) {
    res.render('firstPage')
  }

  static loginPageUser(req, res) {
    res.render('pageLoginforUser')
  }

  static checkUsers(req, res) {
    let email = req.query.email
    let password = req.query.password

    let user = {
      email: email,
      password: password
    }

    User.findAll()
    .then(data => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].email === user.email && data[i].password === user.password) {
          res.redirect('/courseAdmin')
        } else if (i === data.length - 1) {
          res.render('errorLoginForUser')
        }
      }
    })
    .catch(err => {
      res.send(err)
    })
  }
}

module.exports = UserController