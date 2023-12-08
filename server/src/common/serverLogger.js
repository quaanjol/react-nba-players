const dayJS = require('dayjs')

const serverLogger = (...arguments) => {
  if (process.env['API_DISABLE_LOG'] !== undefined && process.env['API_DISABLE_LOG'] === "true") {
    return;
  }

  let logString = `[${dayJS().format('YYYY-MM-DD HH:mm:ss.SSS')}] `;
  for (let i = 0; i < arguments.length; i++) {
    logString = `${logString} ${JSON.stringify(arguments[i], null, 4)}`;
  }

  console.log(logString);
};

module.exports = serverLogger;