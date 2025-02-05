const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/hotels'

mongoose.connect(mongoURL,{
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