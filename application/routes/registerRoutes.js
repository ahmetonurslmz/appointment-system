const express=require('express');
const mw=require('../helpers/sessionMiddleware')

const router=express.Router();
const registerCtrl=require('../controller/registerController');

router.get('/', mw.NotLoggedIn, registerCtrl.registerPage);
router.post('/do', mw.NotLoggedIn, registerCtrl.register);

module.exports=router;