const express = require('express');
const CourseController = require('../controllers/CourseController');
const StudentController = require('../controllers/StudentController');
const router = express.Router()
const UserController = require('../controllers/UserController');
const ContentController = require('../controllers/ContentController');


// FOR USER -- ADMIN

router.get('/', UserController.home)
router.get('/userLogin', UserController.loginPageUser)
router.get('/checkUser', UserController.checkUsers)

// FOR STUDENT

router.get('/studentLogin', StudentController.loginPageStudent)
router.post('/checkLoginStudent', StudentController.checkStudent)
router.post('/addStudent', StudentController.addStudent)

// COURSE

router.get('/course', CourseController.findAll)

// COURSE CONTENT

router.get('/coursecontent', ContentController.findAll)

module.exports = router