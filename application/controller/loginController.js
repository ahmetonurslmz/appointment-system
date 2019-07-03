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
                session.sid = User.password
                session.semail = User.email
                res.json(true)
            } else {
                res.json(false);
            }
        })
    })
}