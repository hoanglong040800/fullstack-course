const mongoose = require('mongoose')
const mongoose_delete = require('mongoose-delete')
const slug = require('mongoose-slug-generator')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const Schema = mongoose.Schema

const CourseSchema = new Schema(
  {
    _id: { type: Number },
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 500 },
    thumbnail: { type: String },
    slug: { type: String, slug: 'name', unique: true },
  },
  {
    _id: false,
    timestamps: true,
  }
)

// PLUGIN
mongoose.plugin(slug)
CourseSchema.plugin(mongoose_delete, {
  overrideMethods: 'all',
  deletedAt: true,
})
CourseSchema.plugin(AutoIncrement)

// Tên model trùng với tên docs trong MongoDB
module.exports = mongoose.model('courses', CourseSchema)
