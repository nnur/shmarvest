const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.load();

const ejs = require('ejs');
const ejsHelpers = require('express-helpers');
const customHelpers = require('./helpers');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const MongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose');
const mognoUrl = `mongodb://${process.env.DBUSER}:${process.env.DBPWD}@ds161580.mlab.com:61580/shmarvest`;
mongoose.connect(mognoUrl);


customHelpers(app);
ejsHelpers(app)
app.set('view engine', 'ejs');
app.use(express.static('public'));

const PORT = 3000 || process.env.PORT;

app.get('/', function (req, res) {
  res.render('landing', {user_signed_in: false})
});

app.get('/signup', function (req, res) {
  res.render('signup', {user_signed_in: false})
});

app.get('/login', function (req, res) {
  res.render('login');
});

app.get('/welcome', function (req, res) {
  app.locals.url = req.url;
  res.render('welcome', {name: 'shaquep'})
});

app.get('/time', function (req, res) {
  app.locals.url = req.url;
  res.render('time' , {user_signed_in: false})
});

app.get('/projects', function (req, res) {
  app.locals.url = req.url;
  res.render('projects');
});

app.post('/login', passport.authenticate('local', { successRedirect: '/welcome',
                                                    failureRedirect: '/login' }));

app.listen(PORT, () => {
    console.log(`listening http://localhost:${PORT}`);
});