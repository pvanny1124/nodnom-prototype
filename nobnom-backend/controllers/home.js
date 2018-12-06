const express = require('express');
const models = require('../models');
const passport = require('../middlewares/auth')

const router = express.Router();

router.get("/users/:id/dashboard", (req, res) => {
    //TODO
})

router.get("/vendors/:id/dashboard", (req, res) => {
  //TODO
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
