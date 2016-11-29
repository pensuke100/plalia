const httpStatus = require('http-status');

/**
 * Default route
 * @param {obj} req - request object
 * @param {obj} res - response object
 * @returns {str} time - current time as a Unix Timestamp
 */
function index(req, res) {
  const time = Date.now().toString();
  res.set('Content-Type', 'text/html');
  res.status(httpStatus.OK).send(time);
}

module.exports = { index };
