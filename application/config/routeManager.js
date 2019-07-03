
const routeLogin = require('../routes/loginRoutes');
const routeRegister = require('../routes/registerRoutes');
const routeHome = require('../routes/homeRoutes');
const routeLogout = require('../routes/logoutRoutes');

module.exports=(app) => {
  app.use('/login', routeLogin);
  app.use('/register', routeRegister);
  app.use('/', routeHome);
  app.use('/logout', routeLogout);
  }