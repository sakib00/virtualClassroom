const User = require('../models/userModel');
const bcrypt = require('bcrypt');


exports.register = function (req, res) {
    var user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.role = req.body.role;
    user.password = req.body.password;

    //Save and Check error
    user.save(function (err) {
        if (err)
            res.json(err);
        else {
            res.json({
                message: "You have been registered!",
                user: user

            });
        }
    });
};


exports.signin = async (req, res) => {
    try {
        let user = await User.findOne({
            "email": req.body.email
        }).populate('courses').exec();
        if (!user)
            return res.status('401').json({
                error: "User not found"
            })

        console.log(user, req)
        if (user.password != req.body.password) {
            return res.status('401').send({
                error: "Email and password don't match."
            })
        }

        return res.json({
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                courses: user.courses
            }
        })

    } catch (err) {

        return res.status('401').json({
            error: "Could not sign in"
        })


    }
}





// const jwt = require('jsonwebtoken');

// module.exports = {

//     index: function (req, res) {
//         userModel.get(function (err, user) {
//             if (err)
//                 res.json({
//                     status: "error",
//                     message: err
//                 });
//             res.json({
//                 status: "success",
//                 message: "Got User Successfully!",
//                 data: user
//             });
//         });
//     },



//     create: function (req, res, next) {

//         userModel.create({
//             name: req.body.name,
//             email: req.body.email,
//             role: req.body.role,
//             password: req.body.password
//         }, function (err, result) {
//             if (err)
//                 next(err);
//             else
//                 res.json({
//                     status: "success",
//                     message: "User added successfully!!!",
//                     data: null
//                 });
//         });
//     },


//     authenticate: function (req, res, next) {
//         userModel.findOne({ email: req.body.email }, function (err, userInfo) {
//             if (err) {
//                 next(err);
//             } else {
//                 if (bcrypt.compareSync(req.body.password, userInfo.password)) {
//                     const token = jwt.sign({ id: userInfo._id },
//                         req.app.get('secretKey'), { expiresIn: '1h' });
//                     res.json({
//                         status: "success",
//                         message: "user found!!!",
//                         data: { user: userInfo, token: token }
//                     });
//                 } else {
//                     res.json({
//                         status: "error",
//                         message: "Invalid email/password!!!",
//                         data: null
//                     });
//                 }
//             }
//         });
//     },
// }