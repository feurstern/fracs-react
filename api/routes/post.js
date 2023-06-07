const express = require('express');
const router = express.Router();

router.get('/', function (req,res,next){
    res.send('Respond with any resources');
});

module.exports = router;