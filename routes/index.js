const express = require('express');
const StudentController = require('../controllers/StudentController');
const router = express.Router()
const UserController = require('../controllers/UserController');


// FOR USER -- ADMIN

router.get('/', UserController.home)
router.get('/userLogin', UserController.loginPageUser)
router.get('/checkUser', UserController.checkUsers)

// FOR STUDENT

router.get('/studentLogin', StudentController.loginPageStudent)
router.post('/checkLoginStudent', StudentController.checkStudent)
router.post('/addStudent', StudentController.addStudent)

module.exports = router