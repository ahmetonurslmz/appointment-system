const express=require('express');
const mw=require('../helpers/sessionMiddleware')

const router=express.Router();
const homeCtrl=require('../controller/homeController');

router.get('/', mw.LoggedIn, homeCtrl.homePage);

module.exports=router;