/**
 * Routes for the /characters endpoint.
 */
const express = require("express")
const ObjectId = require("mongoose")
const Character = require("../models/Character")

const CharacterRouter = express.Router()
const BASE_PATH = "/characters"

/**
 * GET - Get all characters
 */
CharacterRouter.get(BASE_PATH, async (request, response) => {
    const characters = await Character.find()
    response.send(characters)
})

/**
 * GET - Get one character by id 
 */
CharacterRouter.get(BASE_PATH + "/:id", async (request, response) => {
    // Validate the given id
    if(ObjectId.isValidObjectId(request.params.id)) {

        // Find the character with the given id
        const character = await Character.findOne({ _id: request.params.id })
        if (character != null) {
            response.send(character)
        } else {
            // Respond with 404 if the character wasn't found
            response.status("404")
            response.send({
                error: "No character found for id " + request.params.id
            })
        }
    } else {
        // Respond with 400 if the id is invalid
        response.status("400")
        response.send({ 
            error: "Invalid format: Id must be a single string of 12 bytes " + 
                "or a string of 24 hex characters " 
        })
    }
})

/**
 * POST - Create a new character
 */
CharacterRouter.post(BASE_PATH, async (request, response) => {
    Character.create(request.body, (error, character) => {
        if (error) {
            console.log("\nERROR: Could not create Character\n", error)
        } else {
            response.status("201")
            response.send(character)
        }
    })
})

/**
 * PATCH - Change one or more properties of an existing character
 */
CharacterRouter.patch(BASE_PATH + "/:id", async (request, response) => {
    // Validate the given id
    if(ObjectId.isValidObjectId(request.params.id)) {

        // Find the character with the given id and update it
        const character = await Character.findOneAndUpdate(
            conditions = { _id: request.params.id },
            update = request.body,
            options = {
                new: true // return the document AFTER the update is applied
            }
        )

        if (character != null) {
            response.send(character)
        } else { 
            // Respond with 404 if the character wasn't found
            response.status("404")
            response.send({
                error: "No character found for id " + request.params.id
            })
        }
    } else {
        // Respond with 400 if the id is invalid
        response.status("400")
        response.send({ 
            error: "Invalid format: Id must be a single string of 12 bytes " + 
                "or a string of 24 hex characters " 
        })
    }
})

/**
 * DELETE - Delete a character by id
 */
 CharacterRouter.delete(BASE_PATH + "/:id", async (request, response) => {
    // Validate the given id
    if(ObjectId.isValidObjectId(request.params.id)) {

        // Attempt to delete the character with the given id
        const deleteResult = await Character.deleteOne(
            { _id: request.params.id }
        )

        if (deleteResult.deletedCount > 0) {
            response.send({
                 message: "Character with id " + request.params.id + 
                    " was deleted"
                })
        } else {
            // Respond with 404 if the character wasn't found
            response.status("404")
            response.send({
                error: "No character found for id " + request.params.id
            }) 
        }
    } else {
        // Respond with 400 if the id is invalid
        response.status("400")
        response.send({ 
            error: "Invalid format: Id must be a single string of 12 bytes " + 
                "or a string of 24 hex characters " 
        })
    }
})

module.exports = CharacterRouter