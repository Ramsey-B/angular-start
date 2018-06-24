var router = require('express').Router()
var Rosters = require('../models/roster')
var Users = require('../models/user')
let session = require('../auth/session')

router.get("/rosters", (req, res) => {
  Rosters.find({
    userId: req.session.uid
  }).then(roster => {
    res.status(200).send(roster)
  }).catch(err => {
    res.status(400).send({ message: 'No rosters found!', err })
  })
})

router.get("/roster/:id", (req, res) => {
  Rosters.find(req.params.id)
    .then(roster => {
      res.status(200).send(roster)
    })
    .catch(err => {
      res.status(400).send({ message: "An error occurred", err })
    })
})

router.post("/roster", (req, res) => {
  req.body.userId = req.session.uid;
  Rosters.create(req.body)
    .then(newRoster => {
      res.status(200).send(newRoster)
    })
    .catch(err => {
      res.status(400).send({ message: "An error occurred", err })
    })
})

router.put("/roster/:id", (req, res) => {
  Rosters.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(roster => {
      res.status(200).send(roster)
    })
    .catch(err => {
      res.status(400).send({ message: "An error occurred", err })
    })
})

router.delete("/roster/:id", (req, res) => {
  Rosters.findOneAndRemove(req.params.id)
    .then(data => {
      res.status(200).send("Roster successfully deleted!")
    })
    .catch(err => {
      res.status(400).send({ message: "An error occurred", err })
    })
})

//add player to roster
router.put("/roster/:id/player", (req, res) => {
  Rosters.findById(req.params.id)
    .then(roster => {
      roster.players.addToSet(req.body)
      roster.save().then(newRoster => {
        res.status(200).send(newRoster)
      }).catch(err => {
        res.status(500).send({ message: "An error occurred!", err })
      })
    })
})

//remove player from roster
router.delete("/roster/:id/player/:playerId", (req, res) => {
  Rosters.findById(req.params.id)
    .then(roster => {
      var index = roster.players.findIndex(list => {
        return list.id == req.params.listId
      })
      roster.players.splice(index, 1)
      roster.save().then(newRoster => {
        res.status(200).send(newRoster)
      })
        .catch(err => {
          res.status(500).send({ message: "An error occurred!", err })
        })
    })
    .catch(err => {
      res.status(400).send({ message: "An error occurred!", err })
    })
})
