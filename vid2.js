//  const jsonString= '{"name":"John", "age":38, "city":"NewYork"}';
// const jsonObject=JSON.parse(jsonString);
// console.log(jsonObject.name);

//conveting object to json
// const objectToConvert={name:"Alice",age:25};
// const jsonStringfied=JSON.stringify(objectToConvert);
// console.log(jsonStringfied);

// console.log(typeof jsonStringfied);

//expresss
const express = require('express');
const app = express();
const db=require('./db');

const bodyParser=require('body-parser');
app.use(bodyParser.json()); //req.body

// const Person= require('./models/Person');
// const MenuItem=require('./models/Menu');

app.get('/', function (req, res) {
  res.send('Welcome to our hotel')
})



  

  //Create a new Person document using the Mongoose model
  
  // newPerson.name= data.name;
  // newPerson.age= data.age;
  // newPerson.mobile= data.mobile;
  // newPerson.email= data.email;
  // newPerson.address= data.address;

  //const newPerson =  new Person(data);

  //Save the new person to the database

  //we do not use this callback method for saving

  // newPerson.save((error,savedPerson)=>{
  //   if(error){
  //     console.log('Error saving person:',error);
  //     res.status(500).json({error:'Internal server error'})
  //   }
  //   else{
  //     console.log('Data saved successfully');
  //     res.status(200).json(savedPerson);
  //   }
  // })

  //async and await
//   app.post('/person',async(req,res)=>{
//    try{
//     const data = req.body  //Assuming the request body contains the person data

//     //Create a new Person document using the Mongoose model
//     const newPerson =  new Person(data);

//     //Save the new person to the database
//     const response=await newPerson.save();
//     console.log('data saved');
//     res.status(200).json(response);
// }
//    catch(err){
//     console.log(err);
//     res.status(500).json({error:'Internal server error'});
//    }
// })

// app.get('/bread', (req, res)=> {
//     res.send('i would love to srve bread ')
//   })

//   app.get('/idli', (req, res)=> {
//     var customized_idli={
//         name:'rava idli',
//         size:'10 cm diameter',
//         is_sambhar:true,
//         is_chutney:false

//     }  
//     res.send(customized_idli)
//   })

//   app.post('/items', (req,res)=>{
//     res.send('data is saved');
//   })




//Insert the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');
//Use the routers
app.use('/person', personRoutes);
app.use('/items', menuItemRoutes);


     
app.listen(3000, ()=>(
    console.log('listening on port 3000')
))