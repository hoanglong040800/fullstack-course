const newsRouter = require('./news')
const coursesRouter = require('./courses')
const siteRouter = require('./site')

function route(app) {
  app.use('/news', newsRouter)
  app.use('/courses', coursesRouter)

  // home, search
  app.use('/', siteRouter)
}

module.exports = route
