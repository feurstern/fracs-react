import mysql from 'mysql2/promise'

export async function query({query, values = []}){
  const dbConnection = await mysql.createConnection({
    host :'localhost',
    database : 'u1089516_dev_1',
    user : 'root',
    password : ''
  })
  try{
    const [result] = await dbConnection.execute(query, values);
    dbConnection.end();
    return result;
  }
  catch(error){
     throw error;
     return {error};
    }
}