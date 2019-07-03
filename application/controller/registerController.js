const User=require('../models/users');
const bcrypt = require("bcryptjs");

module.exports.registerPage=(req,res) => {
    res.render('register')
}

module.exports.register=(req,res) => {
    const {body: { email, password, password2}, session} = req;

    if(password!=password2) {
        console.log('Passwords are not equal');
        res.json('passwordError')
    } else {
        bcrypt.hash(password, 10, (error, encryptedPassword) =>{
    const newUser=new User({
        email: email,
        password: encryptedPassword
      })
      newUser.save((err, newUserInfo) => {
        if(err) {
          console.log(err);
        } else {
          session.sid = newUserInfo._id
          session.semail = email
          res.json(true)
        }
      })   
        })
    }
}