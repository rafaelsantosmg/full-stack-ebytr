const express = require('express');
const handleError = require('./middlewares/handleError');
const router = require('./routers');

const app = express();

app.use(express.json());

app.use(router);

app.use(handleError);

module.exports = app;
