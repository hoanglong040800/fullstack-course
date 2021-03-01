const Course = require('../models/Course')
const { mongooseToObject, multiMongooseToObject } = require('../utils/dbHelper')

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

  // [GET] /courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then(obj =>
        res.render('courses/courseEdit', { course: mongooseToObject(obj) })
      )
      .catch(next)
  }

  // [PUT] /courses/:id
  update(req, res, next) {
    Course.findByIdAndUpdate(req.params.id, req.body)
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next)
  }

  // [GET] /courses
  index(req, res, next) {
    Course.find()
      .then(arr =>
        res.render('courses/courses', { courses: multiMongooseToObject(arr) })
      )
      .catch(next)
  }
}

module.exports = new courseController()
