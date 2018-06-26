var mongoose = require('mongoose')
var connectionString = 'mongodb://user:password1234@ds249818.mlab.com:49818/nfl-roser'
var connection = mongoose.connection

mongoose.connect(connectionString)

connection.on('error', err=>{
  console.log('ERROR FROM DATABASE: ', err)
})

connection.once('open', ()=>{
  console.log('Connected to Database')
})