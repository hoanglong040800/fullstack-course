const Course = require('../models/Course')
const { multiMongooseToObject } = require('../utils/mongoose')

class SiteController {
  // [GET] /
  home(req, res, next) {
    Course.find({})
      .then(arr => res.render('home', { courses: multiMongooseToObject(arr) }))
      .catch(next)
  }

  // [GET] /search
  search(req, res) {
    res.render('search')
  }
}

module.exports = new SiteController()
