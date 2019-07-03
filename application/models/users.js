const mongoose=require('mongoose');
const tableName='users';
const{ObjectId}=mongoose.Schema;

const Schema=mongoose.Schema;



/*	g_id: {type:mongoose.Schema.Types.ObjectId,
  default: mongoose.Types.ObjectId,
  index: { unique: true }}, */ 
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