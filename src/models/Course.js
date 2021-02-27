const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Course = new Schema({
  name: { type: String, maxLength: 255 },
  description: { type: String, maxLength: 500 },
  thumnail: { type: String },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('courses', Course)
