import { createError } from '../error.js';
import Comment from '../models/Comment.js';
import Video from '../models/Video.js';

export const addComment = async (req, res, next) => {
  try {
    const newComment = new Comment({ userId: req.user.id, ...req.body });
    await newComment.save();
    res.status(200).json('Comment added');
  } catch (err) {
    next(err);
  }
};

export const deleteComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    const video = await Video.findById(comment.videoId);

    if (comment.userId === req.user.id || video.userId === req.user.id) {
      await Comment.findByIdAndDelete(req.params.commentId);
      res.status(200).json('Comment has been deleted');
    } else {
      next(createError(403, 'You are not allowed to delete this comment'));
    }
    await newComment.save();
    res.status(200).json('Comment added');
  } catch (err) {
    next(err);
  }
};

export const getComments = async (req, res, next) => {
  try {
    const comments = await Comment.find({ videoId: req.params.videoId });
    res.status(200).json(comments);
  } catch (err) {
    next(err);
  }
};
