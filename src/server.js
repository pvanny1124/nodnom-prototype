var Sequelize           = require('sequelize');
const express           = require('express');
const bodyParser        = require('body-parser');
const cookieParser      = require('cookie-parser');
const expressSession    = require('express-session');
const passport          = require('./middlewares/auth');
const controllers       = require('./controllers');    

//Configuration of middleware
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public")); 
app.use(cookieParser());

app.use(expressSession(({
  secret: 'keyboard cat - REPLACE ME WITH A BETTER SECRET',
  resave: false,
  saveUninitialized: true,
})));

app.use(passport.initialize());
app.use(passport.session());

//Always stup controllers after passport configuration to ensure that the middleware is attached to the routes
//provided by the controllers routes.
app.use(controllers);
    


//---------------------------Passport Configuration----------------------------//
var APIURL = ""; //Api reference link will go here
const PORT = 8081;

//------------------------------Api Routes-----------------------------------//



//Serve our app on the port we specify
app.listen(PORT, process.env.IP, () => {
    console.log("Now serving port: " + PORT);
})