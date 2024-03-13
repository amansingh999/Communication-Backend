const User = require('../models/model');

const loginUser = async (req, res) => {
  try {
    let user = new User(req.body);
    let isUserExist = await User.findOne({ email: req.body.email, password: req.body.password });
    if (isUserExist) {
      res.status(200).json({
        status: 200,
        error: false,
        message: 'Login Successfully',
      });
    } else {
      res.status(200).json({
        status: 200,
        error: true,
        message: 'Invalid Email or Password',
      });
    }
  } catch (e) {
    res.status(500).json({
      status: 500,
      message: 'Some Error Occurred!!',
    });
  }
  
};

const registerUsers = async (req, res) => {
  try {
    let user = new User(req.body);
    let isUserExist = await User.findOne({ email: req.body.email });
    if (isUserExist) {
      res.status(200).json({
        status: 200,
        error: true,
        message: 'User Already Exist',
      });
    } else {
      await user.save();
      res.status(200).json({
        status: 200,
        error: false,
        message: 'User Register Successfully',
      });
    }
  } catch (e) {
    res.status(500).json({
      status: 500,
      message: 'Some Error Occurred!!',
    });
  }
};

module.exports = { loginUser, registerUsers };
