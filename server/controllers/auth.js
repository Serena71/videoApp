import mongoose from 'mongoose';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import { createError } from '../error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
  try {
    console.log(req.body);
    // encrypt the password before storing into DB
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    // create a new User
    const newUser = new User({ ...req.body, password: hash });
    // Save new User into DB
    await newUser.save();
    res.status(200).send('User has been created');
  } catch (err) {
    next(err);
  }
};

export const signin = async (req, res, next) => {
  try {
    // find user
    const user = await User.findOne({ name: req.body.name });
    if (!user) return next(createError(404, 'User not found!'));
    // verify password
    const isCorrect = await bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect) return next(createError(400, 'Incorrect password'));

    // create user token
    // pass key information which can help verify the user to create a token
    const token = jwt.sign({ id: user._id }, process.env.JWT);

    // separate password parameter from all user parameters
    const { password, ...otherUserInfo } = user._doc;

    // send response
    res
      .cookie('access_token', token, {
        // send token as cookie
        httpOnly: true, // does not allow any client to reach this cookie
      })
      .status(200)
      .json(otherUserInfo); // send other user parameters
  } catch (err) {
    next(err);
  }
};
export const googleSignup = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
