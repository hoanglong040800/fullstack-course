const express = require('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const path = require('path')
const app = express()
const port = 3000


// HTTP logger
app.use(morgan('combined'))


// Middleware
app.use(express.urlencoded())
app.use(express.json())


// Template engine
app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'))


// Static 
app.use(express.static(path.join(__dirname, 'public')))


// Routing
app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.get('/search', (req, res) => {
  res.render('search')
})

app.listen(port, () => {
  console.log(`\n[LINK] ------- http://localhost:${port}\n`)
})