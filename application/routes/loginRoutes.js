const express=require('express');
const mw=require('../helpers/sessionMiddleware')

const router=express.Router();
const loginCtrl=require('../controller/loginController');

router.get('/', mw.NotLoggedIn, loginCtrl.loginPage);
router.post('/do', mw.NotLoggedIn, loginCtrl.loginDo);

module.exports=router;