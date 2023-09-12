const cfg = require('12factor-config');

const env = {
  appName: {
    env: 'APP_NAME',
    type: 'string',
    required: true,
  },
  debug: {
    env: 'DEBUG',
    type: 'string',
    required: true,
  },
};

const loggerEnv = {
  loggerAMQPBroker: {
    env: 'LOGGER_AMQP_BROKER',
    type: 'string',
    required: false,
  },
  loggerRemote: {
    env: 'LOGGER_REMOTE',
    type: 'boolean',
    default: false,
  },
  loggerLevel: {
    env: 'LOGGER_LEVEL',
    type: 'enum',
    values: ['debug', 'info', 'warn', 'error'],
    default: 'debug',
  },
};

Object.assign(env, loggerEnv);

const config = cfg(env);

module.exports = config;
