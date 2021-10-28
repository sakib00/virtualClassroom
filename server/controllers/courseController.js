const Course = require('../models/courseModel');
const User = require('../models/userModel');


//Create Course
exports.create = function (req, res) {
    var course = new Course();
    course.title = req.body.title;
    course.instructor = req.body.user_id;

    //Save and Check error
    course.save(function (err) {
        if (err)
            res.json(err);
        else {
            res.json({
                message: "Course Created",
                data: course

            });
        }
    });
}
exports.teacher_courses = async function (req, res) {
    courses = await Course.
        find().exec();
    return res.json({
        courses: courses
    })
}
