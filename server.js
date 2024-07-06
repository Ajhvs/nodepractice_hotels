// function add(a,b){
// return a+b;
// }

// var add=function(a,b){
//     return a+b;
// }
// var add=(a,b)=>{
//     return a+b;
// }

// var add=(a,b)=>a+b;

// var result=add(4,6);
// console.log(result);

// (function(){
//     console.log("dipanshii")
// })();

//Callback
// function callback(){
//     console.log("dipanshiii is calling callback");
// }

// const add= function(a,b,callback){
//     var result=a+b;
//     console.log('result:' +result);//main fxn work complete
//     callback();
// }

// add(3,4,callback);

// const add= function(a,b,callback){
//          var result=a+b;
//          console.log('result:' +result);//main fxn work complete
//        callback();
//     }

//     // add(3,4,function(){
//     //     console.log("add completed");
//     // })

//     add(2,3,()=>console.log('add donee'));

    // var fs = require('fs');
    // var os = require('os');

    // var user=os.userInfo();
    // console.log(user.username);

    // fs.appendFile('greeting.txt', 'Hi' +user.username + '!', ()=>{
    //     console.log('file is created');
    // })

    // console.log(os);



const notes =require('./notes.js');
var _ = require('lodash');

console.log("server file is available");
var age=notes.age;
var result = notes.addNumber(age+19,23);
console.log(age);
console.log('result is now ' +result);

var data=["person","person",1,2,1,2,'name','age','2']; 
var filter =_.uniq(data);
console.log(filter);

console.log(_.isString(true));