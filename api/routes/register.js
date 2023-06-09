const express = require('express');
const axios = require("axios");
const router = express.Router();

router.get('/', function (req,res,next){
    console.log('===> register, register');
    axios.get("https://ourtoga.com/api_register/dENWTWVaeUFiVUZKUExUUTJNVGd6TWpjd09UVnVSRDlRVWtRNU5UZ3hNemMyYm1jPQ==")
    .then(response => res.json(response.data))
    .catch(err => res.secn(err));
});

module.exports = router;