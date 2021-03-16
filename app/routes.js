/**
 * Combine all the separate `Router` files into one router
 * that can be easily imported into the server.
 */

const express = require("express")
const CharacterRouter = require("./characters/CharacterRouter")

const router = express.Router()

// Health check endpoint
router.get("/", (req, res) => {
    return res.send("Health check passed")
})

// Add all other routes
router.use("/", CharacterRouter)

module.exports = router