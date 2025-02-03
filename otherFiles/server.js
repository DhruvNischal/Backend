// Class - 1 
// var ary = [10,103,'string','vjay'];
// console.log(typeof(ary));
// function Add(a,b)
// {
//     return a+b;
// }
// // var add = function(a,b)
// // {
// //     return a+b;
// // }

// // var add = (a,b) => {
// //     return a+b;
// // }
// var a = 10;
// var b = 23;
// console.log(Add(a,b));
// function callback()
// {
//     console.log('prince is calling a callback function');
// }
// const add = function(a,b,callback)
// {
//     var result = a+b;
//     console.log('result '+ result);
//     callback();
// }
// add(3,4,callback);

// Class - 2 
// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile('greeting.txt','Hi ' +user.username + '!  \n', ()=>{
//     console.log('File is created'); 
// })
// console.log(os);
// console.log(fs);


// class -3 
var _ = require('lodash');
const notes = require('./notes.js');
console.log('required file is availble');
var age = notes.age;
console.log(age);

var result  = notes.addNumber(age+18,10);
console.log('result is now : '+ result);

var data = ['person',"person",1,2,3,2,3,1,'name','age','2'];
var filter = _.uniq(data);
var str = _.isString(true);

console.log(str);
console.log(typeof(data));
console.log(filter);