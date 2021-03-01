const express = require('express')
const { urlencoded, json, static } = require('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const path = require('path')
const methodOverride = require('method-override')

const route = require('./routes')
const db = require('./config/db')

const port = 3000
const app = express()

// Connect db
db.connect()

// Method Override
app.use(methodOverride('_method'))

// HTTP logger
app.use(morgan('combined'))

// Middleware
app.use(urlencoded())
app.use(json())

// Template engine
app.engine(
  'hbs',
  exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
    },
  })
)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

// Static
app.use(static(path.join(__dirname, 'public')))

// Routing
route(app)

app.listen(port, () => {
  console.log(`\n---------------- http://localhost:${port}\n`)
})
