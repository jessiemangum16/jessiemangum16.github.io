
const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  eventHost: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
  },
  locationName: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
  },
})

module.exports = mongoose.model('events', EventSchema)