import { createError } from '../error.js';
import User from '../models/User.js';
import Video from '../models/Video.js';

export const update = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          // $set to update only specified fields
          $set: req.body,
        },
        // return the newest user (after update)
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, 'You can update only your account'));
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json('User has been deleted');
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, 'You can update only your account'));
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...otherInfo } = user;
    res.status(200).json(otherInfo);
  } catch (err) {
    next(err);
  }
};

export const subscribe = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $push: { subscriberedUsers: req.params.id },
    });

    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: 1 },
    });
    res.status(200).json('Subscription successful');
  } catch (err) {
    next(err);
  }
};

export const unsubscribe = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $pull: { subscriberedUsers: req.params.id },
    });

    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: -1 },
    });
    res.status(200).json('Unsubscription successful');
  } catch (err) {
    next(err);
  }
};

export const like = async (req, res, next) => {
  const video = await Video.findById(req.params.videoId);
  if (!video) return next(createError(404, 'Video not found'));
  try {
    await Video.findByIdAndUpdate(req.params.videoId, {
      $addToSet: { likes: req.user.id },
    });
    res.status(200).json('Liked the video successfully');
  } catch (err) {
    next(err);
  }
};
export const dislike = async (req, res, next) => {
  const video = await Video.findById(req.params.videoId);
  if (!video) return next(createError(404, 'Video not found'));
  try {
    await Video.findByIdAndUpdate(req.params.videoId, {
      $pull: { likes: req.user.id },
    });
    res.status(200).json('Disliked the video successfully');
  } catch (err) {
    next(err);
  }
};
