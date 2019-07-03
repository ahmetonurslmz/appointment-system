const User=require('../models/users');

module.exports.registerPage=(req,res) => {
    res.render('register')
}

module.exports.register=(req,res) => {
    const {body: { email, password, password2}} = req;

    if(password!=password2) {
        res.json('Passwords are not equal')
    } else {
    const newUser=new User({
        email: email,
        password: password
      })
      newUser.save((err, newUserInfo) => {
        if(err) {
          console.log(err);
        } else {
          session.sid = newUserInfo._id
          session.semail = email

          res.json({
            success: true
          })

        }
      })   
    }
}