const express = require("express");   // api framework
const MongoDBConnect = require("../app/db/MongoDBConnect") // mongoDB

// Get environment variables
const PORT = process.env.PORT;
const APP_SECRET = process.env.APP_SECRET;

// Connect to MongoDB
MongoDBConnect();

// Inititalize the app & set up express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// add handlers for each path
app.get("/", (req, res) => {
    return res.send(APP_SECRET);
  });

  // Run the app on the configured port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));