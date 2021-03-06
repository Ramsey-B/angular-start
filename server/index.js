var express = require('express')
var bp = require('body-parser')
var app = express()
var cors = require('cors')
var port = process.env.PORT || 3000


app.use(express.static(__dirname + "/../www/dist"))

var whitelist = ['http://localhost:4200', 'https://ramsey-playtunes.herokuapp.com'];
var corsOptions = {
	origin: function (origin, callback) {
		var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
		callback(null, originIsWhitelisted);
	},
	credentials: true
};
app.use(cors(corsOptions))
require('./db/mlab-config')

// app.use(cors())
// //Fire up database connection
// require('./db/mlab-config')



app.use(bp.json())
app.use(bp.urlencoded({
  extended: true
}))

let auth = require('./auth/auth')
app.use(auth.session)
app.use(auth.router)

let roster = require("./routes/rosters")
app.use(roster.router)

let api = require("./api/api")
app.use(api.router);



app.get('*', (req, res, next) => {
  res.status(404).send({
    error: 'No matching routes'
  })
})

app.listen(port, () => {
  console.log('server running on port', port)
})