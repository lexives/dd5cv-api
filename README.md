# D&D 5e Character Vault - API
A REST API for managing characters for the Dungeons and Dragons 5th edition tabletop RPG.

## How to Run Locally
### Dependencies
- Node.js
- NPM (Node Package Manager)

### Setup
Create a file named `.env` within the root folder. Fill in the following:
```
PORT: [Whatever port you want to run the sever on]

CONNECTION_STRING = [The string for connecting to the MongoDB database, which can be gotten from MongoDB Atlas. Or you can connect to a locally run DB]
```

Then run the command
`npm intall` to install dependencies.

### Start the Server
`npm start`

### Run Tests
`npm test`

## Contributors
Developed by Lexi Ives

## License
TBD

## Notes
Reference:
- https://helabenkhalfallah.medium.com/nodejs-rest-api-with-express-passport-jwt-and-mongodb-98e5f2fee496