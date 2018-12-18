const bcrypt = require('bcrypt-nodejs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Sequelize = require('sequelize')
const env = process.env.NODE_ENV || 'test';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const User = require("../models/users")(sequelize, Sequelize);
const Vendor = require("../models/vendor")(sequelize, Sequelize);

function passwordsMatch(passwordSubmitted, storedPassword) {
  return bcrypt.compareSync(passwordSubmitted, storedPassword);
}

//Notes on differentiating between a vendor and a user on the frontend:
//  If the user object returned from our auth has a vendorName property, then the user or guest is 
//  indeed a vendor. If not, they are a user.

passport.use(new LocalStrategy({
    usernameField: 'email',
  },
  (email, password, done) => {

    //check if the guest is a user...
    User.findOne({
      where: { email },
    }).then((user) => {

      //check if user exists in the user's table or if the passwords match..
      if (!user || passwordsMatch(password, user.password_hash) === false) {
         //If not a user or the passwords don't match, check if guest is a vendor...
         return Vendor.findOne({ where: { email } })
                      .then(vendor => {
                            if (!vendor || passwordsMatch(password, vendor.password_hash) === false) {
                                //if at this point a vendor with the same email doesn't exist, then return false..
                                return done(null, false, { message: 'Incorrect password.' });
                            }
                            //else, we have found a vendor
                            return done(null, vendor, { message: 'Successfully Logged In!' });
                      })
          
      }
      //if the user does exist, return the user.
      return done(null, user, { message: 'Successfully Logged In!' });
    })
    .catch(error => {
        console.log(error);
    });
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {

  //Check if user exists in Users table
  User.findById(id)
      .then((user) => {

            //if the guest is not a user...
            if(!user){

              //check if they are a vendor...
              return Vendor.findById(id)
                    .then(vendor => {
                          !vendor ? done(null, false) : done(null, vendor)
                    })
            } else {
              //Else, they are indeed a user
              done(null, user)
            } 
       })
       .catch(error => {
          console.log(error);
       });
});

passport.redirectIfLoggedIn = (route) =>
  (req, res, next) => (req.user ? res.redirect(route) : next());

passport.redirectIfNotLoggedIn = (route) =>
  (req, res, next) => (req.user ? next() : res.redirect(route));

module.exports = passport;