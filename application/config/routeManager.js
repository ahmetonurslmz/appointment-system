
const routeLogin = require('../routes/loginRoutes');
const routeRegister = require('../routes/registerRoutes');

module.exports=(app) => {
  app.use('/login', routeLogin);
  app.use('/register', routeRegister);
  }