const mongoose=require('mongoose');
const tableName='users';
const{ObjectId}=mongoose.Schema;

const Schema=mongoose.Schema;


const userSchema= new Schema({
    email: String,
    password: String
	
}, {collection:tableName});


let User
try {
  User = mongoose.model(tableName)
} catch (error) {
  User = mongoose.model(tableName, userSchema)
}

module.exports=User;