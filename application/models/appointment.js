const mongoose=require('mongoose');
const tableName='appointments';
const{ObjectId}=mongoose.Schema;

const Schema=mongoose.Schema;


const AppointmentSchema= new Schema({
    created_by: ObjectId,
    name: String,
    surname: String,
    email: String,
    phone_number: String,
    dateTime: Date,
    distanceValue: String,
    distance: String,
    duration: String,
    durationValue: String,
    destinationAddress: String
}, {collection:tableName});


let Appointment
try {
  Appointment = mongoose.model(tableName)
} catch (error) {
  Appointment = mongoose.model(tableName, AppointmentSchema)
}

module.exports=Appointment;