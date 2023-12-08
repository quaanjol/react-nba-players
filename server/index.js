const { DOTENV_FILE } = process.env;
require('dotenv').config({ path: DOTENV_FILE });

require('./src/libs/mongo-db');

const http = require('http');
const express = require('express')
const path = require('path')
const app = express();
const bodyparser = require('body-parser');
const serverLogger = require('./src/common/serverLogger');

const rootRouter = require('./src/api/index');

var port = process.env.PORT;

/*
 * Public path
 */
app.use('/access', express.static(path.join(__dirname, "..", "public")));

/*
 * Body parser
 */
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json({ limit: '10mb' }));

/*
 * Routes
 */
app.use('/', rootRouter);

/*
 * Server
 */
const server = http.createServer(app);

server.on('error', async function(error) {
  serverLogger(`Server Error\n\n${error.stack}`);
})

server.listen(port, () => {
  serverLogger('server listens on port ' + port)
});

module.exports = server;