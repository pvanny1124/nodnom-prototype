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
// app.use(express.static(__dirname + "/public")); 
app.use(cookieParser());

app.use(expressSession(({
  secret: 'keyboard cat - REPLACE ME WITH A BETTER SECRET',
  resave: false,
  saveUninitialized: true,
})));

app.use(passport.initialize());
app.use(passport.session());


//cors middleware
app.use((req, res, next) => {

  //allow access to our API with these urls
  var allowedOrigins = [
      'http://127.0.0.1:3001', 
      'http://localhost:3001', 
      'http://127.0.0.1:3000', 
      'http://localhost:3000'
  ];

  var origin = req.headers.origin;

  //check if the origin is a part of the allowedOrigins array
  //if it is, set the header and allow access.
  if(allowedOrigins.indexOf(origin) > -1){
       res.header('Access-Control-Allow-Origin', origin);
  }

  //Request methods you wish to allow
  res.header(
    'Access-Control-Allow-Methods', 
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );

  //Request headers you wish to allow
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  
  //run controller logic
  next();
});

//Always stup controllers after passport configuration to ensure that the middleware is attached to the routes
//provided by the controllers routes.
app.use(controllers);
    


//---------------------------Passport Configuration----------------------------//
var APIURL = ""; //Api reference link will go here
const PORT = process.env.PORT || 3000 ;

//------------------------------Api Routes-----------------------------------//



//Serve our app on the port we specify
app.listen(PORT, process.env.IP, () => {
    console.log("Now serving port: " + PORT);
})