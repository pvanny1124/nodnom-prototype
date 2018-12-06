const express = require('express');
const models = require('../models');
const passport = require('../middlewares/auth')

const router = express.Router();

router.post('/login', (req, res) => {
  passport.authenticate('local', {
      successRedirect: '/profile',
      failureRedirect: '/login'
  })(req, res);
})

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
})

router.get('/protected',
  passport.redirectIfNotLoggedIn('/login'),
  (req, res) => {
    res.send('secrets');
})


module.exports = router;
