const express = require('express');
const routerAdmin = express.Router()
const CourseControllerAdmin = require('../controllers/CourseControllerAdmin');
const ContentControllerAdmin = require('../controllers/ContentControllerAdmin');

// SHOW CATEGORY
routerAdmin.get('/courseAdmin', CourseControllerAdmin.findAll)

// SHOW CONTENT - ADMIN
routerAdmin.get('/adminContent/:id', ContentControllerAdmin.findAll)

// ADD FORM
routerAdmin.get('/adminAddForm', ContentControllerAdmin.addForm)
routerAdmin.post('/adminAddData', ContentControllerAdmin.addData)

// EDIT FORM
routerAdmin.get('/editForm/:id', ContentControllerAdmin.editForm)
routerAdmin.post('/editData/:id', ContentControllerAdmin.editData)

module.exports = routerAdmin

