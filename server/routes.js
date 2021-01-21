//Initialize express router
let router = require('express').Router();

//Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Works',
        message: 'Server Working'
    });
});

//Import Student Controller
// var studentController = require('./controllers/studentController');
// //Import Teacher Controller
// var teacherController = require('./controllers/teacherController');
//Import User Controller
var userController = require('./controllers/userController');
var courseController = require('./controllers/courseController');

//Student routes
// router.route('/student')
//     .get(studentController.index)
//     .post(studentController.add);

// router.route('/student/:student_id')
//     .get(studentController.view)
//     .patch(studentController.update)
//     .put(studentController.update)
//     .delete(studentController.delete);

// //Teacher routes
// router.route('/teacher')
//     .get(teacherController.index)
//     .post(teacherController.add);

// router.route('/teacher/:teacher_id')
//     .get(teacherController.view)
//     .patch(teacherController.update)
//     .put(teacherController.update)
//     .delete(teacherController.delete);
router.route('/courses')
    .post(courseController.create);
router.route('/teacher/courses')
    .post(courseController.teacher_courses);

//User routes
// router.route('/user')
//     .get(userController.index);
// //     .post(userController.create);

router.route('/registeruser')
    .post(userController.register);
// router.route('/user/:user_id') 
//     .get(userController.view)
//     .patch(userController.update)
//     .put(userController.update)
//     .delete(userController.delete);

router.route('/signin')
    .post(userController.signin)
// router.route('/signout')
//     .get(userController.signout)
module.exports = router;