const query = require('../../helper/db');

const handler = async(req,res)=>{
    try{
        const results = await query('SELECT * FROM test_table')
        res.status(200).json({data:results})
        console.log(results);
    }
    catch(err){
            console.log(`The database is error: ${err}`)
            res.status(500).jsonn({data:err})
        }
};


export default handler