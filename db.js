const mongoose = require('mongoose');
require('dotenv').config();
const MongoURL = 'mongodb://localhost:27017/hotels'

const MongoDB = 'mongodb+srv://dnyt2003:XDNlA623p5mmPaT0@hostels.xzcuq.mongodb.net/?retryWrites=true&w=majority&appName=Hostels';


mongoose.connect(MongoDB,{
    useNewUrlParser: true,
    useUnifiedTopology : true
})

const db = mongoose.connection;
db.on('connected',()=>{
    console.log("MongoDb Server - to Database Connected");
})
db.on('disconnected',()=>{
    console.log("Databse Disconnected");
})
db.on('error',(err)=>
    {
        console.log('MongoDB Disconnected');
    })

module.exports = db;
//Comment