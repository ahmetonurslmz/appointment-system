const Appointment = require('../models/appointment');
var getJSON = require('get-json');
const Users = require('../models/users');

module.exports.createAnAppointment=(req,res) => {
    const {body: {name,surname,email,phoneNumber,dateTime,distance,distanceValue,duration,durationValue,destinationAddress}, session: {sid}} = req;
    d=new Date(dateTime);
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var nowForGo = new Date(utc + (3600000*+6.00));

    function timeConvertToHours(n) {
      var num = n;
      
      var hours = (num / 60);
      var rhours = Math.floor(hours);
      return rhours;
      }

      function timeConverToMinutes(n) {
          var num = n;
          var hours = (num / 60);
          var rhours = Math.floor(hours);
          var minutes = (hours - rhours) * 60;
          var rminutes = Math.round(minutes);
          return rminutes;
          }
 var hour=timeConvertToHours(durationValue/60)
 var minutes = timeConverToMinutes(durationValue/60)
 if(hour!=0) {
  var timeToGo = new Date(nowForGo.setHours( nowForGo.getHours() - hour )).toISOString();
  var timeToGo = new Date(nowForGo.setMinutes( nowForGo.getMinutes() - minutes )).toISOString();
 } else {
  var timeToGo = new Date(nowForGo.setMinutes( nowForGo.getMinutes() - minutes )).toISOString();
 }
 d=new Date(dateTime);
 utc = d.getTime() + (d.getTimezoneOffset() * 60000);
 var nowForCome = new Date(utc + (3600000*+6.00));

 if(hour!=0) {
  var timeToCome = new Date(nowForCome.setHours( nowForCome.getHours() + hour+1 )).toISOString();
  var timeToCome = new Date(nowForCome.setMinutes( nowForCome.getMinutes() + minutes )).toISOString();
 } else {
  var timeToCome = new Date(nowForCome.setMinutes( nowForCome.getMinutes() + minutes+60 )).toISOString();
 }

 d=new Date(dateTime);
 utc = d.getTime() + (d.getTimezoneOffset() * 60000);
 var nowTime = new Date(utc + (3600000*+6.00));

    const newAppointment=new Appointment({
        created_by: sid,
        name: name,
        surname: surname,
        email: email,
        phone_number: phoneNumber,
        dateTime: nowTime,
        distanceValue: distanceValue,
        distance: distance,
        duration: duration,
        durationValue: durationValue,
        destinationAddress: destinationAddress,
        timeToGo: timeToGo,
        timeToCome: timeToCome
      })
      newAppointment.save((err, newAppointmentInfo) => {
        if(err) {
          console.log(err);
        } else {
          res.json(true)
        }
      })   
}

module.exports.takeData=(req,res) => {
    const {body: {url}} = req;
    getJSON(url).then(data => {
        const {distance,duration} = data.rows[0].elements[0];
        if(distance && duration) {
            const destinationAddress = data.destination_addresses[0];
            res.json({distance,duration,destinationAddress});
        } else {
            res.json(false);
        }
    })
}

module.exports.AppointmentPage=(req,res) => {
  const {session: {sid}, params: {id}} = req;
  Users.findOne({_id: sid}).then(sessionUser => {
      res.render('app', {sessionUser})
  })
}

module.exports.getData=(req,res) => {
  const {body: {a_id}} = req;
  Appointment.findOne({_id: a_id}).then(data => {
    data ? res.json(data) : res.json(false);
  })
}