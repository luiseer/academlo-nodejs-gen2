const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { promisify } = require('util');

// Utils
const { AppError } = require('../util/appError');
const { catchAsync } = require('../util/catchAsync');
const { User } = require('../models/user.model');

dotenv.config({ path: './config.env' });

exports.validateSession = catchAsync(async (req, res, next) => {
  // Extract token from headers
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    // Bearer token123.split(' ') -> [Bearer, token123]
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(new AppError(400, 'Invalid session'));
  }

  // Verify that token is still valid
  const decodedToken = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET
  );

  const user = await User.findOne({
    where: { id: decodedToken.id, status: 'active' },
    attributes: {
      exclude: ['password']
    }
  });

  if (!user) {
    return next(new AppError(401, 'This user is no longer avalible'));
  }

  // Validate that the id the token contains belongs to a valid user

  // Grant access
  next();
});
