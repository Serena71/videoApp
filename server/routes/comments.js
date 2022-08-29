import express from 'express';
import { addComment, deleteComment, getComments } from '../controllers/comment.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

// add comment
router.post('/', verifyToken, addComment);

// delete comment
router.delete('/:commentId', verifyToken, deleteComment);

// get all comment
router.get('/:videoId', getComments);

export default router;
