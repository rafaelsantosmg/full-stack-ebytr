const express = require('express');
const cors = require('cors');
const handleError = require('./middlewares/handleError');
const router = require('./routers');

const app = express();

app.use(express.json());

app.use(cors());

app.use(router);

app.use(handleError);

module.exports = app;
