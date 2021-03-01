const Course = require('../models/Course')
const { mongooseToObject } = require('../utils/dbHelper')

class courseController {
  // [GET] /courses/create
  create(req, res, next) {
    res.render('courses/courseCreate')
  }

  // [POST] /courses/store
  store(req, res, next) {
    const course = new Course(req.body)
    course
      .save()
      .then(() => res.redirect('/'))
      .catch(err => console.log('\nAdd Course Error\n'))
  }

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
