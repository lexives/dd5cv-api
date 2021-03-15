const express = require("express");   // api framework
const mongoose = require("mongoose");  // a library for interacting with MongoDB

// Get environment variables
const PORT = process.env.PORT;
const APP_SECRET = process.env.APP_SECRET;
const CONNECTION_STRING = process.env.CONNECTION_STRING;

// Connect to MongoDB
mongoose.connect(
    uris = CONNECTION_STRING,
    options = {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    }
).then(
    onFulfilled = (result) => {
        // Inititalize the app & set up express
        const app = express();
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));

        // add handlers for each path
        app.get("/", (req, res) => {
            return res.send(APP_SECRET);
        });

        // Run the app on the configured port
        console.log("BEEP BOOP BOP");
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

    }, 
    onRejected = (error) => {
        console.log("\nERROR: Could not connect to MongoDB\n", error);
    }
)