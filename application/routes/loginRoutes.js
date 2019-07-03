const express=require('express');
const mw=require('../helpers/sessionMiddleware')

const router=express.Router();
const loginCtrl=require('../controller/loginController');

router.get('/', mw.NotLoggedIn, loginCtrl.loginPage);

module.exports=router;