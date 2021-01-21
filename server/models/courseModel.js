let mongoose = require('mongoose');

//schema
const LessonSchema = new mongoose.Schema({
    title: String,
    content: String,
    resource_url: String
})
const Lesson = mongoose.model('Lesson', LessonSchema);

const courseSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    lessons: [LessonSchema],
    created_at: {
        type: Date,
        default: Date.now
    }
})


var Course = module.exports = mongoose.model('Course', courseSchema);

