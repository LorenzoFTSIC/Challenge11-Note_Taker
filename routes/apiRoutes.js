// require router from express - activity 21 and 22, specifically in the routes in activity 22
const api = require("express").Router();
const { addNote } = require("../store");
// require store from the helpers folder\
const store = require("../store")

// GET ALL THE NOTES //
api.get("/notes", (req, res) => {
  store
    // getNotes()
    .getNotes()
    .then((notes) => {
      res.json(notes)
    })
    .catch((err) => {
      console.log(err)
    })
    // then take the notes and return them with res.json
})

// POST A NEW NOTE //
api.post("/notes", (req, res) => {
  store
    // addNote(req.body)
    .addNote(req.body)
    .then((notes) => {
      res.json(notes)
    })
    .catch((err) => {
      console.log(err)
    })
    // then return note with res.json
})

// DELETE A NOTE //
api.delete("notes/:id", (req, res) => {
  store
    // removeNote(req.params.id)
    // give a status letting you know it"s been deleted
})

// export your router
module.exports = api;
