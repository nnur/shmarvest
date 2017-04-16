var express = require('express');
var router = express.Router();
const passport = require('passport');
const User = require('../../schemas/User');
const Company = require('../../schemas/Company');

router.get('/signup', function (req, res) {
  res.render('signup', {user_signed_in: false})
});

router.get('/login', function (req, res) {
  res.render('login');
});

router.post('/login', passport.authenticate('local', { successRedirect: '/welcome',
                                                   failureRedirect: '/login' }));
router.post('/signup', function(req, res) {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  const company = new Company({
    companyName: req.body.companyName,
    teamSize: req.body.teamSize,
    webAddress: req.body.webAddress,
    owner: user._id,
    employees: [user._id]
  });
  const companyValidateError = company.validateSync();

  if (!companyValidateError) {
    user.save((err, user) => {
      if (err) return res.send(err);

      company.save((err, company) => {
        if (err) return res.send(err);
        res.send(200);
      })
    });
  }
});

module.exports = router;