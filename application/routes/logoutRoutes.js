const express=require('express');
const mw=require('../helpers/sessionMiddleware')

const router=express.Router();
const logoutCtrl=require('../controller/logoutController');

router.get('/', mw.LoggedIn, logoutCtrl.logoutPage);

module.exports=router;