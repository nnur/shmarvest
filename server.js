const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
dotenv.load();

const ejs = require('ejs');
const ejsHelpers = require('express-helpers');
const customHelpers = require('./helpers');
customHelpers(app);
ejsHelpers(app)

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const localStrategyHandler = require('./services/strategies/localStrategy');
passport.use(new LocalStrategy(localStrategyHandler));

const MongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose');
const mognoUrl = `mongodb://${process.env.DBUSER}:${process.env.DBPWD}@ds161580.mlab.com:61580/shmarvest`;
mongoose.connect(mognoUrl);

// Enable CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    next();
});

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use(passport.initialize());
//app.use(passport.session());

const index = require('./routes/index');
const auth = require('./routes/auth');
app.use('/', index);
app.use('/', auth);


const PORT = 3000 || process.env.PORT;

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

app.listen(PORT, () => {
    console.log(`listening http://localhost:${PORT}`);
});