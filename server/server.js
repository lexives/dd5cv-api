const express = require("express");   // api framework
const mongoose = require("mongoose"); // a library for interacting with MongoDB
const routes = require("../app/routes")

// Get environment variables
const PORT = process.env.PORT;
const CONNECTION_STRING = process.env.CONNECTION_STRING;

// Connect to MongoDB
mongoose.connect(
    uris = CONNECTION_STRING,
    options = {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
).then(
    onFulfilled = (result) => {
        // Inititalize the app & set up express
        const app = express();
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));

        // Add routes
        app.use("/", routes)

        // Run the app on the configured port
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

    }, 
    onRejected = (error) => {
        console.log("\nERROR: Could not connect to MongoDB\n", error);
    }
)