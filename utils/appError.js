class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    // Testable property ensures that only Operational Errors (created using this class) and not Program Errors get sent back to client
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

// Stack Trace is the trace to where the error was picked up in the code

module.exports = AppError;
