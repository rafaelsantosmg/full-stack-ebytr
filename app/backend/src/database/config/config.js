require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'password',
    database: process.env.MYSQL_DB || 'ebytr_db',
    host: process.env.HOST || 'localhost',
    dialect: 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'password',
    database: process.env.MYSQL_DB || 'ebytr_db',
    host: process.env.HOST || 'localhost',
    dialect: 'mysql',
  },
  production: {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'password',
    database: process.env.MYSQL_DB || 'ebytr_db',
    host: process.env.HOST || 'localhost',
    dialect: 'mysql',
  },
};
