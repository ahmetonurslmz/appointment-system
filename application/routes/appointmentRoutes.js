const express=require('express');
const mw=require('../helpers/sessionMiddleware')

const router=express.Router();
const appointmentCtrl=require('../controller/AppointmentController');

router.post('/create', mw.LoggedIn, appointmentCtrl.createAnAppointment);

module.exports=router;