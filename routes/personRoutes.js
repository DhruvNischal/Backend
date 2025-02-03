const express = require("express");
const router = express.Router();
const Person = require("../Models/person"); // Correct path

router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("Data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log("Data saved in Database");
    res.status(200).json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post('/:work',async(req,res)=>{
    try{
        const workType = req.params.work;
        const response = await Person.find({work:workType});
        console.log('Response feteched');
        res.status(200).json(response);
    }
    catch(err)
    {
        console.log('Internal Server Error', err);
        res.status(404).json({error:"Internal Server error"});
    }
})

router.put('/:uid',async(req,res)=>{
    try{
        const Person_id = req.params.uid;
        const updatedPersonData = req.body;

        const response = await Person.findByIdAndUpdateperson(Person_id,updaredPersonData,{
            new:true, // Return the updated document
            runValidators:true, //Run mongoose validation
        }) 
        console.log('Data updated');
        res.status(200).json(response);
    }
    catch(err)
    {
        console.log(err);
        res.status(404).json({error:'Internal server error'});
    }
    if(!response)
    {
        return res.status(404).json({error:'Person not found'});

    }
})

router.delete('/:uid',async(req,res)=>{
    try
    {
        const Person_id = req.params.uid;
        const response = await findByIdAndRemove(Person_id);
        if(!response)
        {
            return res.status(400).json({error:'Person not found'});
        }
        else
        {
            console.log('Data Delted');
            res.status(200).json({message:'Item Delted Sucessfully'});
        }
        
    }
    catch(err)
    {
        console.log(err);
        response.status(404).json({error:'Internal Server error'});
    }

})

module.exports = router;
