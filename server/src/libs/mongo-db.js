require('dotenv').config();
const mongoose = require('mongoose');

const serverLogger = require('../common/serverLogger');

const uris = process.env.API_DATABASE

/*
 * Db connections
 */
mongoose.connect(uris, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

mongoose.connection.on('connected', (error) => {
  if (error) {
    throw error
  }
  serverLogger('Mongoose connected to ' + uris)
})
mongoose.connection.on('error', () => {
  serverLogger('Mongoose error connecting')
})
mongoose.connection.on('disconnected', () => {
  serverLogger('Mongoose disconnected')
})