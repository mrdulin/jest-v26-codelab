const logger = require('./logger');

['unhandledRejection', 'uncaughtException'].forEach((event) => {
  process.on(event, (err) => logger.error(err));
});
