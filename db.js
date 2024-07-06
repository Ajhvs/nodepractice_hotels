const mongoose=require('mongoose');

//Define the MongoDB connection URL
const mongoURL="mongodb://0.0.0.0:27017/hotels";

//Set up MongoDB connection
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

//Get the default connection
//Mongoose maintain a default connection object representing the MongoDB connection.
const db=mongoose.connection;

// Define event listeners for database connection
db.on('connected',()=>{
    console.log('Connected to MongoDB server');
});

db.on('error',(err)=>{
    console.log('MongoDB connection error:',err);
});
 
db.on('disconnected',()=>{
    console.log('MongoDB disconnected');
});

 //Export the database connection
 module.exports=db;