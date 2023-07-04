<<<<<<< HEAD
"use server"
const db = require('../../helper/db');


const handler = async()=>{
    try{
        const results = await db('SELECT * FROM api_key',)
        
        console.log(results[0]);
    }
    catch(err){
        console.log(`The database is error: ${err}`)
        // res.status(500).json({data:err})
    }
};

export default handler
=======
>>>>>>> b701ec8f685c6b9ddeae624f1dafe26c635f2efe
