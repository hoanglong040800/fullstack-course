const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)

const Course = new Schema(
  {
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 500 },
    thumnail: { type: String },
    slug: { type: String, slug: 'name', unique: true },
  },
  {
    timestamps: true,
  }
)

// Tên model trùng với tên docs trong MongoDB
module.exports = mongoose.model('courses', Course)
