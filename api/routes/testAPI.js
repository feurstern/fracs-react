const express = require('express');
const router = express.Router();

router.get('/', function(req,res,next){
    res.send("Connected succesfully");
});

module.exports =router;



