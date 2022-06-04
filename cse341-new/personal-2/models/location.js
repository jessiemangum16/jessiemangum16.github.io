
const mongoose = require('mongoose')

const LocationSchema = new mongoose.Schema({
  locationName: {
    type: String,
    required: true,
  },
  streetAddress: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipCode: {
    type: Number,
    required: true,
  },
  webAddress: {
    type: String,
  },
  phoneNum: {
    type: Number,
  },
})

module.exports = mongoose.model('location', LocationSchema)