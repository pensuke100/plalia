const winston = require('winston');
const config = require('./env');

// Logging levels
const colors = {
  info: 'green',
  debug: 'blue',
  error: 'red',
};

const level = config.loggerLevel;

module.exports = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      json: true,
      colorize: true,
      level,
    }),
  ],
  colors,
});
