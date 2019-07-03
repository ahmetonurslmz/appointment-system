const Appointments = require('../models/appointment')

module.exports.createAnAppointment=(req,res) => {
    const {body: {name,surname,email,phoneNumber}} = req;
    console.log(name);
    res.json()
}