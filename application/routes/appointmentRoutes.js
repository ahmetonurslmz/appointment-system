const express=require('express');
const mw=require('../helpers/sessionMiddleware')

const router=express.Router();
const appointmentCtrl=require('../controller/AppointmentController');

router.post('/create', mw.LoggedIn, appointmentCtrl.createAnAppointment);
router.post('/take', mw.LoggedIn, appointmentCtrl.takeData);

module.exports=router;