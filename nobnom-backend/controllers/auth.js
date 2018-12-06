const express = require('express');
const passport = require('../middlewares/auth');
const Sequelize = require('sequelize')
const router = express.Router();

const env = process.env.NODE_ENV || 'test';
const config = require(__dirname + '/../config/config.json')[env];

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const User = require("../models/users")(sequelize, Sequelize);
const Vendor = require("../models/vendor.js")(sequelize, Sequelize);

router.get('/error', (req, res) => {
  res.sendStatus(401);
})


//User signup controller

router.post('/signup/users', (req, res) => {

  //Insert a new user row into the User table
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    country: req.body.country,
    age: req.body.age,
    email: req.body.email,
    password_hash: req.body.password,

  }).then((user) => {

    //Return okay, user creation success message, and user's data
    res.json({ userCreated: true, userData: user });

  }).catch((error) => {
    console.log(error)
    //Return error and user creation failure message, and user's data
    res.status(400).json({ userCreated: false, userData: user});
  });
});

//Vendor signup controller

router.post('/signup/vendors', (req, res) => {

  //Insert a new Vendor row inside of the Vendor table
  Vendor.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      email: req.body.email,
      location: req.body.location,
      vendorName: req.body.vendorName,
      country: req.body.country,
      password_hash: req.body.password,

  }).then((vendor) => {

    //Return okay, success message, and the vendor's information
    res.status(200).json({ vendorCreated: true, vendorData:  vendor });

  }).catch((error) => {
    console.log(error)
    //Return error and failure message
    res.status(400).json({ vendorCreated: false, vendorData: vendor });
  });
});


router.post('/login',
  passport.authenticate('local', { failureRedirect: '/auth/error' }),
  (req, res) => {
      if(!req.user){
        return res.status(200).json({ vendor: req.vendor })
      } else {
        return res.status(200).json({ user: req.user })
      }

  });


router.get('/logout', (req, res) => {
  req.logout();
  res.sendStatus(200);
});


router.get('/profile',
  passport.redirectIfNotLoggedIn('/auth/error'),
  (req, res) => {
    res.json({ msg: "This is the profile page for: "+req.user.email});
});


module.exports = router;