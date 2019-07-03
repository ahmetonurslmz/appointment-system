const mongoose=require('mongoose');
const tableName='appointments';
const{ObjectId}=mongoose.Schema;

const Schema=mongoose.Schema;


const AppointmentSchema= new Schema({
    name: String,
    surname: String,
    email: String,
    address: String,
    phone_number: String
}, {collection:tableName});


let Appointment
try {
  Appointment = mongoose.model(tableName)
} catch (error) {
  Appointment = mongoose.model(tableName, AppointmentSchema)
}

module.exports=Appointment;