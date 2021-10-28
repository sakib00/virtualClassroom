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
    if (err) res.json(err);
    else {
      res.json({
        message: 'You have been registered!',
        user: user,
      });
    }
  });
};

exports.signin = async (req, res) => {
  try {
    let user = await User.findOne({
      email: req.body.email,
    })
      .populate('courses')
      .exec();
    if (!user)
      return res.status('401').json({
        error: 'User not found',
      });

    console.log(user, req);
    if (user.password != req.body.password) {
      return res.status('401').send({
        error: "Email and password don't match.",
      });
    }

    return res.json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        courses: user.courses,
      },
    });
  } catch (err) {
    return res.status('401').json({
      error: 'Could not sign in',
    });
  }
};
