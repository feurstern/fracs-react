const express = require('express');
const port  = 3001;
const app = express();

app.get('/', (req,res)=>{
    res.send("Connected succesfully");
})

app.listen(port,()=>{
    console.log(`The running port is ${port}`);
});