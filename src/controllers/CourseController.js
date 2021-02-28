const Course = require('../models/Course')
const { mongooseToObject } = require('../utils/mongoose')

class courseController {
  // [GET] /courses/:slug
  detail(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then(obj =>
        res.render('courses/courseDetail', { course: mongooseToObject(obj) })
      )
      .catch(next)
  }
  // [GET] /courses
  index(req, res) {
    res.render('courses/courses')
  }
}

module.exports = new courseController()
