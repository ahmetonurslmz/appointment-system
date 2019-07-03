// MIDDLWWARES

/** FOR CREATING LOCAL VARIABLES */
const variables = (req, res, next) => {
  let loggedIn = (req.session.id) ? true : false
  res.locals.loggedIn = loggedIn
  res.locals.session = req.session
  next()
}

/** USER WHO LOGGED SYSTEM DOES ACCESS */
const LoggedIn = (req, res, next) =>
  !req.session.sid ? res.redirect('/login') : next()

/** USER WHO LOGGED SYSTEM DOES NOT ACCESS */
const NotLoggedIn = (req, res, next) =>
  req.session.sid ? res.redirect('/') : next()

module.exports = {
  variables,
  LoggedIn,
  NotLoggedIn,
}
