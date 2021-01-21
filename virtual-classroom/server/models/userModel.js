var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
const saltRounds = 10;

//schema
var userSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name is required'
    },
    email: {
        type: String,
        unique: 'Email already exists',
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        required: 'Email is required'
    },
    role: {
        type: Number,
        required: true,
        default: 2
    },
    password: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
    }],
});


// hash user password before saving into database
// userSchema.pre('save', function (next) {
//     this.password = bcrypt.hashSync(this.password, saltRounds);
//     next();
// });

//Export Student Model
var User = module.exports = mongoose.model('User', userSchema);

module.exports.get = function (callback, limit) {
    User.find(callback).limit(limit);
}