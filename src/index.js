const express = require('express')
const { urlencoded, json, static } = require('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const path = require('path')
const methodOverride = require('method-override')
const _ = require('lodash')

const route = require('./routes')
const db = require('./config/db')
const SortMiddleware = require('./middlewares/SortMiddleware')

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

// Custom Middleware
app.use(SortMiddleware)

// Template engine
app.engine(
  'hbs',
  exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
      sortable: (column, sort) => {
        const icons = {
          default: 'oi oi-elevator',
          asc: 'oi oi-arrow-bottom',
          desc: 'oi oi-arrow-top',
        }

        const types = {
          default: 'asc',
          asc: 'desc',
          desc: 'asc',
        }

        const sortType = column === sort.column ? sort.type : 'default'
        const icon = icons[sortType]
        const type = types[sortType]

        return `
        <a href="?_sort&column=${column}&type=${type}" class="link-th">
          ${_.startCase(column)}
          <span class="${icon} icon-th"></span>
        </a>`
      },
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
