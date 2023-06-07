const express = require('express');
const port  = 3001;
const app = express();

app.get('/', (req,res)=>{
    res.send("Connected succesfully");
})

app.get('/login',(req,res)=>{
    res.send('/login');
});

app.get('certifications', (req,res)=>{
    res.send('/certifications');
});

app.get('gallery', (req,res)=>{
    res.send('/gallery');
})

app.get('register', (req,res)=>{
    res.send('/register');
})

app.listen(port,()=>{
    console.log(`The running port is ${port}`);
});