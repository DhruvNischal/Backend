const express  = require('express');
const router = express.Router();
const MenuItem = require("../Models/menu"); // Fixed model path
const bodyParser = require("body-parser");

router.post("/", async (req, res) => {
    try {
      const data = req.body;
      const newMenu = new MenuItem(data);
      const response = await newMenu.save();
      console.log("data for menu posted");
      res.status(200).json(response);
    } 
    catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
router.get("/", async (req, res) => {
    try {
      const data = await MenuItem.find();
      console.log("Data fetched");
      res.status(200).json(data);
    } 
    catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
router.get('/:taste',async(req,res)=>{
      try
      {
          const tasteType = req.params.taste;
          if(tasteType == 'salty' ||tasteType == 'sweet'||tasteType == 'sour'||tasteType == 'spicy'){
              const response = await MenuItem.find({taste:tasteType});
              console.log('Response feteched');
              res.status(200).json(response);
          }
          else
          {
              res.status(404).json({error:'Invalid taste type'});
          }
      }
      catch(err)
      {
          console.log(err);
          res.status(404).json({error:'Invalid Request'});
      }
  });

  module.exports = router;