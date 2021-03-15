// import and download dependencies
const express = require("express");   // api calls
const dotenv = require("dotenv");     // environment variables
const MongoDBConnect = require("./app/db/MongoDBConnect")

// configure dotenv -- SHOULD HAPPEN AS EARLY AS POSSIBLE
dotenv.config()
const PORT = process.env.PORT;
const APP_SECRET = process.env.APP_SECRET;

// connect to MongoDB
MongoDBConnect();

// inititalize the app & set up express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// add handlers for each path
app.get("/", (req, res) => {
    return res.send(APP_SECRET);
  });

// Run the app on the configured port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
