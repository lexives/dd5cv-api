/**
 * index.js is the main entrypoint of the app. From here we will set up
 * environment variables and start the server from the server.js file.
 */

// Configure dotenv so we can get environment variables
// (This should happen as early as possible!)
const dotenv = require("dotenv");
dotenv.config()

require('./server/server')