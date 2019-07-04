const Appointments = require('../models/appointment')
var getJSON = require('get-json')

module.exports.createAnAppointment=(req,res) => {
    const {body: {name,surname,email,phoneNumber}} = req;
    console.log(name);
    res.json()
}

module.exports.takeData=(req,res) => {
    const {body: {url}} = req;
    getJSON(url).then(data => {
        var {distance,duration} = data.rows[0].elements[0];
        if(distance && duration) {
            res.json({distance,duration});
        } else {
            res.json(false);
        }
    })
}