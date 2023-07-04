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
