const express=require('express');
const mw=require('../helpers/sessionMiddleware')

const router=express.Router();
const appointmentsCtrl=require('../controller/AppointmentsController');

router.get('/', mw.LoggedIn, appointmentsCtrl.AppointmentsPage);

module.exports=router;