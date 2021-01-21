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
// //Remove Course
// const remove = async (req, res) => {
//     try {
//         let course = req.course
//         let deleteCourse = await course.remove()
//         res.json(deleteCourse)
//     } catch (err) {
//         return res.status(400).json({
//             error: errorHandler.getErrorMessage(err)
//         })
//     }
// }

// const read = (req, res) => {
//     return res.json(req.course)
// }

// const list = async (req, res) => {
//     try {
//         let courses = await Course.find().select('name email updated created')
//         res.json(courses)
//     } catch (err) {
//         return res.status(400).json({
//             error: errorHandler.getErrorMessage(err)
//         })
//     }
// }

// /**
//  * Load course and append to req.
//  */
// const courseByID = async (req, res, next, id) => {
//     try {
//         let course = await Course.findById(id).populate('instructor', '_id name')
//         if (!course)
//             return res.status('400').json({
//                 error: "Course not found"
//             })
//         req.course = course
//         next()
//     } catch (err) {
//         return res.status('400').json({
//             error: "Could not retrieve course"
//         })
//     }
// }

// const newLesson = async (req, res) => {
//     try {
//         let lesson = req.body.lesson
//         let result = await Course.findByIdAndUpdate(req.course._id, { $push: { lessons: lesson }, updated: Date.now() }, { new: true })
//             .populate('instructor', '_id name')
//             .exec()
//         res.json(result)
//     } catch (err) {
//         return res.status(400).json({
//             error: errorHandler.getErrorMessage(err)
//         })
//     }
// }

// export default {
//     create,
//     courseByID,
//     read,
//     list,
//     remove,
//     newLesson,
// }