//Initialize express router
let router = require('express').Router();

//Set default API response
router.get('/', function (req, res) {
  res.json({
    status: 'API Works',
    message: 'Server Working',
  });
});

var userController = require('../controllers/userController');
var courseController = require('../controllers/courseController');

router.route('/courses').post(courseController.create);
router.route('/teacher/courses').post(courseController.teacher_courses);

router.route('/registeruser').post(userController.register);

router.route('/signin').post(userController.signin);

module.exports = router;
