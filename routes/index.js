var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('landing', {user_signed_in: false})
});

module.exports = router;