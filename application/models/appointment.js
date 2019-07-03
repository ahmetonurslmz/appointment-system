const mongoose=require('mongoose');
const tableName='users';
const{ObjectId}=mongoose.Schema;

const Schema=mongoose.Schema;


const userSchema= new Schema({
    name: String,
    surname: String,
    email: String,
    address: String,
    phone_number: String
}, {collection:tableName});


let User
try {
  User = mongoose.model(tableName)
} catch (error) {
  User = mongoose.model(tableName, userSchema)
}

module.exports=User;