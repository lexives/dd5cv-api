const mongoose = require("mongoose");  // a library for interacting with MongoDB

mongoose.Promise = global.Promise

/**
 * MongoDB connect
 */
const MongoDBConnect = async() => {
  const connectionString = process.env.CONNECTION_STRING;
  const dbHost = process.env.MONGOOSE_DB_HOST;
  const dbPort = process.env.MONGOOSE_DB_PORT;
  const dbName = process.env.MONGOOSE_DB_NAME;
  try {
    await mongoose.connect(
      connectionString,
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    // TODO: use a logger to log that we're connected to mongo
    console.log("Connected to mongo!")
  } catch (error) {
    // TODO: use a logger to log error
    console.log("Could not connect to MondoDB: ", error)
  }
};

module.exports = MongoDBConnect;