const httpStatus = require('http-status');

/**
 * Default hello route.
 * @param {obj} req - request object
 * @param {obj} res - response object
 * @returns {str} - universe
 */
function index(req, res) {
  res.set('Content-Type', 'text/plain');
  res.status(httpStatus.OK).send('universe');
}

module.exports = { index };
