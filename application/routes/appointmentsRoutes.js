const express=require('express');
const mw=require('../helpers/sessionMiddleware')

const router=express.Router();
const appointmentsCtrl=require('../controller/AppointmentsController');

router.get('/', mw.LoggedIn, appointmentsCtrl.AppointmentsPage);
router.post('/get-data', mw.LoggedIn, appointmentsCtrl.getData);

module.exports=router;