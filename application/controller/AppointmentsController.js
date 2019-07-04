const Users = require('../models/users');

const Appointments = require('../models/appointment');
module.exports.AppointmentsPage=(req,res) => {
    const {session: {sid}} = req;
    Users.findOne({_id: sid}).then(sessionUser => {
        res.render('app', {sessionUser})
    })
}
const moment = require('moment')
module.exports.getData=(req,res) => {
    const {session: {sid}} = req;
    Appointments.find({created_by: sid}).then(result => {
        res.json(result)
    })
}