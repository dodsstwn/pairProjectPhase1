// const {Student, Transaction, Course, CourseContent, UserCourse} = require('../models')

// class Controller{
//     static findAll(req, res) {
//         Course.findAll()
//         .then((data) => {
//           res.send('ini course findAll')
//         }).catch((err) => {
//           res.send(err)
//         });
//       }
    
//       static getAddCourse(req, res) {
//         res.send('ini course form')
//       }
    
//       static postAddCourse(req, res) {
//         let newData = {
            
//         }
    
//         Course.create(newData)
//         .then((data) => {
//           res.send('ini postAddCouse')
//         })
//         .catch((err) => {
//           res.send(err)
//         });
//       }
    
//       static getEditCourse(req, res) {
//         let id = +req.params.id
//         Course.findByPk(id)
//         .then((data) => {
//           res.send('ini edit form')
//         }).catch((err) => {
//           res.send(err)
//         });
//       }
    
//       static postEditCourse(req, res) {
//         let id = +req.params.id
//         let newData = {
          
//         }
    
//         Course.update(newData, {where: {id}})
//         .then((data) => {
//           res.send('ini post edit form')
//         })
//         .catch((err) => {
//           res.send(err)
//         });
//       }
    
//       static deleteData(req, res) {
//         let id = +req.params.id
//         Course.destroy({
//           where: {id}
//         })
//         .then((data) => {
//           res.send('ini delete')
//         }).catch((err) => {
//           res.send(err)
//         });
//       }
// }

// module.exports = Controller