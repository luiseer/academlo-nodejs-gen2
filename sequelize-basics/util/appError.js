class AppError extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
    //4** = error || 5** fail
    this.status = `${statusCode}`.startsWith('4') ? 'error' : 'fail'
    Error.captureStackTrace(this, this.constructor)
    // if (statusCode <= 400) {
    //   new AppError(400, 'Must provider valid title, content & user ID')
    // } else if (statusCode <= 500) {
    //   new AppError(500, 'App crash')
    // }
  }
}

module.exports = { AppError };
