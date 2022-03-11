//utils
const jwt = require('jsonwebtoken')
const { AppError } = require('../util/appError')


exports.validateSession = (req, res, next) => {
    if (
        req.headers.authorization ||
        req.headers.authorization.startsWith('Bearer')
        ) {
        token = req.headers.authorization.split(' ')[1]
    }
    if (!token) {
        return next(new AppError( 400, 'Invalid Session'))
    }

    const validToken = await promsify(jwt.verify)(
        token,
    )


    next()
}