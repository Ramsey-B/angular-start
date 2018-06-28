var mongoose = require('mongoose')
var Schema = mongoose.Schema
var schemaName = 'Roster'
var ObjectId = Schema.Types.ObjectId

var playerSchema = new Schema({
  fullname: {type: String},
  team: {type: String},
  position: {type: String},
  photo: {type: String},
  bye_week: {type: String}
})

var rosterSchema = new Schema({
  title: {type: String},
  author: {type: String},
  players: [playerSchema],
  userId: {
    type: ObjectId,
    ref: "user",
    required: true
  }
})

rosterSchema.pre('save', function(next) {
  this.markModified('players')
  next()
})

module.exports = mongoose.model(schemaName, rosterSchema);