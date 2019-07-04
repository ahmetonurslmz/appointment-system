const Appointment = require('../models/appointment')
var getJSON = require('get-json')

module.exports.createAnAppointment=(req,res) => {
    const {body: {name,surname,email,phoneNumber,dateTime,distance,distanceValue,duration,durationValue,destinationAddress}, session: {sid}} = req;
    d=new Date(dateTime);
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var now = new Date(utc + (3600000*+6.00));
    const newAppointment=new Appointment({
        created_by: sid,
        name: name,
        surname: surname,
        email: email,
        phone_number: phoneNumber,
        dateTime: now,
        distanceValue: distanceValue,
        distance: distance,
        duration: duration,
        durationValue: durationValue,
        destinationAddress: destinationAddress
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