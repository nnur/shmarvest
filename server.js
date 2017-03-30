const express = require('express');
const app = express();
const ejs = require('ejs');
const helpers = require('express-helpers');

helpers(app)
app.set('view engine', 'ejs');
app.use(express.static('public'));

const PORT = 3000 || process.env.PORT;

app.get('/', function (req, res) {
  res.render('welcome', {name: 'hwllo'})
});

app.listen(PORT, () => {
    console.log(`listening http://localhost:${PORT}`);
});