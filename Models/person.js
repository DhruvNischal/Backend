const mongoose = require('mongoose');
const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['Chef','Waiter','Manager','SDE','DE','Analyst'],
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
    },
    salary:{
        type:Number
    }
});

const Person = mongoose.model('Person',personSchema);
module.exports = Person;

