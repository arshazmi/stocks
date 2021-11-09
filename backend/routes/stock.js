const stock = require("../controllers/stock.js");
  
const express = require("express");
const router=express.Router();



// Retrieve a stock
router.get("/:name", stock.findOne);

// Retrieve all stock
// router.get("/", stock.findAll);


module.exports=router;