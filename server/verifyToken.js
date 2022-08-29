import jwt from 'jsonwebtoken';
import { createError } from './error.js';

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  //   no token available
  if (!token) return next(createError(401, 'You are not authenticated'));

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, 'Invalid token'));

    // if verification returns no error, assign the unwrapped user to req.user, so we can access it in next()
    req.user = user;
    next();
  });
};
