import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/users.js';
import videoRoutes from './routes/videos.js';
import commentRoutes from './routes/comments.js';
import authRoutes from './routes/auth.js';
import cookieParser from 'cookie-parser';

const app = express();
// use dotenv to keep data security
dotenv.config();
const connect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log('Connected to DB');
    })
    .catch((e) => {
      throw e;
    });
};
// use cookie parser for token
app.use(cookieParser());

// use express.json to accept json body
app.use(express.json());

// use the api routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/comments', commentRoutes);

// error handler middleware
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Default Error Message';
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(8800, () => {
  connect();
  console.log('Connected on http://localhost:8800');
});
