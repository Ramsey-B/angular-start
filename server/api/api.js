//43gnmrsdc8rz
var router = require('express').Router()

let axios = require('axios')

var api = axios.default.create({
  timeout: 3000,
  withCredentials: true
})

var baseURL = 'http://api.cbssports.com/fantasy/players/search?'
var Url2 = '&version=3.0&SPORT=football&response_format=json'


//get by position
router.get('/api/find-by-name/:query', (req, res) => {
  api.get('http://api.cbssports.com/fantasy/players/search?name=' + req.params.query + Url2)
    .then(players => {
      var newPlayers = []
      players.data.body.players.forEach(player => {
        switch (player.position) {
          case "QB":
          case "RB":
          case "WR":
          case "TE":
          case "DST":
          case "K":
            newPlayers.push({
              fullname: player.fullname,
              team: player.pro_team,
              position: player.position,
              photo: player.photo,
              bye_week: player.bye_week
            })
            break;
        }
      })
      res.status(200).send(newPlayers)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.get('/api/find-by-position/:query', (req, res) => {
  api.get('http://api.cbssports.com/fantasy/players/search?position=' + req.params.query + Url2)
    .then(players => {
      var newPlayers = []
      players.data.body.players.forEach(player => {
        switch (player.position) {
          case "QB":
          case "RB":
          case "WR":
          case "TE":
          case "DST":
          case "K":
            newPlayers.push({
              fullname: player.fullname,
              team: player.pro_team,
              position: player.position,
              photo: player.photo,
              bye_week: player.bye_week
            })
            break;
        }
      })
      res.status(200).send(newPlayers)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.get('/api/find-by-team/:query', (req, res) => {
  api.get('http://api.cbssports.com/fantasy/players/search?team=' + req.params.query + Url2)
    .then(players => {
      var newPlayers = []
      players.data.body.players.forEach(player => {
        switch (player.position) {
          case "QB":
          case "RB":
          case "WR":
          case "TE":
          case "DST":
          case "K":
            newPlayers.push({
              fullname: player.fullname,
              team: player.pro_team,
              position: player.position,
              photo: player.photo,
              bye_week: player.bye_week
            })
            break;
        }
      })
      res.status(200).send(newPlayers)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

module.exports = {
  router
}
