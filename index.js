const express = require('express');
const exphbs = require('express-handlebars');
const { Client } = require('pg');
const path = require('path');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
  })
);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.render('client/home');
});

app.listen(8080, function() {
  console.log('Server started at port 8080');
});
