require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'password',
    database: process.env.MYSQL_DB || 'ebytr_api',
    host: process.env.HOST || '127.0.0.1',
    dialect: 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'password',
    database: process.env.MYSQL_DB || 'ebytr_api',
    host: process.env.HOST || '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'password',
    database: process.env.MYSQL_DB || 'ebytr_api',
    host: process.env.HOST || '127.0.0.1',
    dialect: 'mysql',
  },
};
