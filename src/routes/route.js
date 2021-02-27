const newsRouter = require('./news')
const siteRouter = require('./site')

function route(app) {
  app.use('/news', newsRouter)

  // home, search
  app.use('/', siteRouter)
}

module.exports = route
