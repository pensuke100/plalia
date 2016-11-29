const http = require('http');
const logger = require('./src/server/config/logger');
const app = require('./src/server/config/express');

const port = app.get('port');

const server = http.createServer(app);

server.listen(port, () => {
  logger.info('listening on port: ', port);
});
