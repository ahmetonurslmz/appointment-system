require('dotenv').config()

// Require dependencies
const
  express = require('express'),
  { env: { PORT, SESSION_SECRET_LETTER } } = process,
  favicon = require('serve-favicon'),
  path = require('path'),
  bodyParser = require('body-parser'),
  expressValidator = require('express-validator'),
  session = require('client-sessions'),
  app = express(),
  mw = require('./application/helpers/sessionMiddleware')
  

// View engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname, '/application/views'));



//We have to put bodyParser function on top of routeManager.
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(expressValidator())
app.use(session({
  cookieName: 'session',
  secret: SESSION_SECRET_LETTER,
  duration: 60 * 60 * 1000,
  activeDuration: 5 * 60 * 1000
}))
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Middleware for some local variables to be used in the template
app.use(mw.variables)

async function loadDB() {
  require('./application/config/db');
}

//Routes
require('./application/config/routeManager')(app);

//Database
loadDB()
.then((data) => {
app.listen(PORT, () => {
  console.log('Connection link.. http://localhost:'+PORT);
})
}).catch(err => {
  console.log(err);
})

