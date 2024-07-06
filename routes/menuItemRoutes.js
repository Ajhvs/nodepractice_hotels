const express= require('express');
const router = express.Router();

const Menu=require('./../models/Menu');
const MenuItem = require('./../models/Menu');

router.post('/',async(req,res)=>{
    try{
     const data = req.body  //Assuming the request body contains the menuitem data
  
     //Create a new Item document using the Mongoose model
     const newItem =  new MenuItem (data);
  
     //Save the new Item to the database
     const response=await newItem.save();
     console.log('data saved');
     res.status(200).json(response);
  }
    catch(err){
     console.log(err);
     res.status(500).json({error:'Internal server error'});
    }
  })
  
  router.get('/',async(req,res)=>{
    try{
      const data= await MenuItem.find();
      console.log('data fetched');
      res.status(200).json(data);
    }catch(err){
      console.log(err);
      res.status(500).json({error:'Internal server error'});
    }
  })

  router.get('/:tasteType', async(req,res)=>{
    try{
      const tasteType = req.params.tasteType; //Extract the worktype from the URL parameter
      if(tasteType == 'sweet' || tasteType == 'bitter' || tasteType == 'salty' || tasteType == 'spicy'|| tasteType == 'sour'){
        const response = await Menu.find({taste: tasteType});
        console.log('response fetched');
        res.status(200).json(response);  
    }
    else{
      res.status(404).json({error:'Invalid work type'});
    }
    }catch(err){
      console.log(err);
      res.status(500).json({error:'Internal server error'});
    }
    })

    router.put('/:id', async(req,res)=>{
        try{
            const ItemId = req.params.id; //Extract the id fro the URL parameter
            const updatedItemData = req.body; //Updated data for the item

            const response = await MenuItem.findByIdAndUpdate(ItemId,updatedItemData,{
                new:true, //Return the updated document
                runValidators:true, //Run Mongoose validation
            })

            if(!response){
                return res.status(404).json({error: 'Item not found'});
            }

            console.log('data updated');
             res.status(200).json(response);

        }catch(err){
            console.log(err);
            res.status(500).json({error:'Internal Server Error'});

        }
    })

    router.delete('/:id',async (req,res)=>{
        try{
            const ItemId= req.params.id; //Extract the item's ID from the URL parameter
             
            //Assuming you have a Person model
            const response=await MenuItem.findByIdAndDelete(ItemId);
            if(!response){
                return res.status(404).json({error: 'Item not found'});
            }
            
            console.log('data deleted');
             res.status(200).json({message:'Item Deleted Successfully'});


        }catch(err){
            console.log(err);
            res.status(500).json({error:'Internal Server Error'});

        }
    })
     

  
  module.exports= router;