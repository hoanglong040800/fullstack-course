const Course = require('../models/Course')

const { multiMongooseToObject } = require('../utils/dbHelper')

class MeController {
  // [GET] /me/stored/courses
  storedCourses(req, res, next) {
    let courseFind = Course.find()

    if (req.query.hasOwnProperty('_sort')) {
      courseFind = courseFind.sort({
        [req.query.column]: req.query.type,
      })
    }

    Promise.all([courseFind, Course.count(), Course.countDeleted()])
      .then(([arr, count, countDeleted]) =>
        res.render('me/stored-courses', {
          courses: multiMongooseToObject(arr),
          count,
          countDeleted,
        })
      )
      .catch(next)
  }

  // [GET] /me/deleted/courses
  deletedCourses(req, res, next) {
    Promise.all([Course.findDeleted(), Course.count(), Course.countDeleted()])
      .then(([arr, count, countDeleted]) =>
        res.render('me/deleted-courses', {
          courses: multiMongooseToObject(arr),
          count,
          countDeleted,
        })
      )
      .catch(next)
  }
}

module.exports = new MeController()
