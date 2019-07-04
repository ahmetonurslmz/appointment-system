const Users=require('../models/users');
const bcrypt = require("bcryptjs");

module.exports.loginPage=(req,res) => {
    res.render('login')
}

module.exports.loginDo=(req,res) => {
    const {body: {email,password}, session} = req;

    Users.findOne({email: email}).then(User => {
        bcrypt.compare(password, User.password, function (err, passwordControl) {
            if(passwordControl) {
                session.sid = User._id
                session.semail = User.email
                res.json(true)
            } else {
                res.json(false);
            }
        })
    })
}

module.exports.sessionUser=(req,res) => {
    const {session: {sid}} = req;
    Users.findOne({_id: sid}).then(sessionUser => {
        if(sessionUser) {
            res.json(sessionUser)
        } else {
            res.json(false);
        }
    })
}