const express = require('express');
const router = require('./routers');

const app = express();

app.use(express.json());

app.use(router.routerUser);

module.exports = app;
