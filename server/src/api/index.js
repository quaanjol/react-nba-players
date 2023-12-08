const express = require('express');
const routes = express.Router();

const pingRouter = require('./ping/index');

routes.use('/api/ping', pingRouter);

module.exports = routes;