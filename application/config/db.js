const mongoose=require('mongoose');
mongoose.Promise=require('bluebird');
require('dotenv').config();


const MONGO_URI=process.env.MONGO_URL;


mongoose.connect(MONGO_URI,{useNewUrlParser: true,useCreateIndex: true})
.then(() => console.log('Database has been connected with server.'))
.catch((err) => console.log(err) )