const Course = require('../models/Course')

const { multiMongooseToObject } = require('../utils/dbHelper')

class MeController {
  // [GET] /me/stored/courses
  storedCourses(req, res, next) {
    Course.find({})
      .then(arr =>
        res.render('me/stored-courses', { courses: multiMongooseToObject(arr) })
      )
      .catch(next)
  }
}

module.exports = new MeController()
