const express = require('express');
const exphbs = require('express-handlebars');
const { Client } = require('pg');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;

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
  res.redirect('/travelville');
});

app.get('/travelville', function(req, res) {
  res.render('client/project_a');
});

app.get('/quazzu', function(req, res) {
  res.render('client/project_b');
});

app.get('/solutions', function(req, res) {
  res.render('client/project_b_solutions');
});

app.get('/signup', function(req, res) {
  res.render('client/project_b_signup');
});

app.get('/madmin', function(req, res) {
  res.render('client/project_c');
});

app.get('/details', function(req, res) {
  res.render('client/project_c_details');
});

app.get('/posts', function(req, res) {
  res.render('client/project_c_posts');
});

app.get('/categories', function(req, res) {
  res.render('client/project_c_categories');
});

app.get('/comments', function(req, res) {
  res.render('client/project_c_comments');
});

app.get('/users', function(req, res) {
  res.render('client/project_c_users');
});

app.get('/login', function(req, res) {
  res.render('client/project_c_login');
});

app.listen(4000, function() {
  console.log('Server started at port 4000');
});

app.listen(PORT);
