const express = require('express');
const { urlencoded, json, static } = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

const route = require('./routes/route');

const port = 3000;
const app = express();

// HTTP logger
app.use(morgan('combined'));

// Middleware
app.use(urlencoded());
app.use(json());

// Template engine
app.engine(
  'hbs',
  exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
console.log(__dirname);
app.set('views', path.join(__dirname, 'views'));

// Static
app.use(static(path.join(__dirname, 'public')));

// Routing
route(app);

app.listen(port, () => {
  console.log(`\n[LINK] ------- http://localhost:${port}\n`);
});
