// require path
// rquire router from express - activity 21 and 22, specifically in the routes in activity 22
const api = require("express").Router();
const path = require("path")


// set up a route for /notes that responds with the notes.html file
api.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})

// for any other routes, using * as the path, you can respond with the index.html file

module.exports = api;