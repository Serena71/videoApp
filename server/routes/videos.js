import express from 'express';
import {
  addVideo,
  updateVideo,
  deleteVideo,
  findVideo,
  addView,
  trend,
  random,
  sub,
  getByTags,
  search,
} from '../controllers/video.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

// Create a video
router.post('/', verifyToken, addVideo);
// Update video
router.put('/:id', verifyToken, updateVideo);
// Delete video
router.delete('/:id', verifyToken, deleteVideo);
// Get a video
router.get('/find/:id', findVideo);
// View a video
router.put('/view/:id', addView);
// Get random videos
router.get('/random', random);
// Get trending videos
router.get('/trend', trend);
// Get subscribed videos
router.get('/sub', verifyToken, sub);
// Get videos by tags
router.get('/tags', getByTags);
// Get videos by title
router.get('/search', search);
export default router;
