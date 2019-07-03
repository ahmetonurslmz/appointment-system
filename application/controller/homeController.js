const Users = require('../models/users');
module.exports.homePage=(req,res) => {
    const {session: {sid}} = req;
    Users.findOne({_id: sid}).then(sessionUser => {
        res.render('app', {sessionUser})
    })
}