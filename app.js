const nconf = require('nconf');
const server = require('./server');
const { loadSettings } = require('./config/configurationAdaptor');

const appSettingsPath = process.env.APP_SETTINGS_FILE_PATH;

console.log(appSettingsPath);

loadSettings({ appSettingsPath })
    .then(() => {
        // TODO Connect to DB, if any. 

        // Read the config property required for starting the server
        const serverOptions = {
            logSeverity: nconf.get('logSeverity'),
          };

        console.log(nconf.get('url'));
        server.createServer(serverOptions);
        // TODO Start the server
    })
    .catch((err) => {
        console.log(err);
    })