import mysql from 'serverless-mysql';

const dbConnection = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    // port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
  }

});

export default async function excuteQuery({ query, values }) {
  try {
    const [result] = await dbConnection.query(query, values);
    dbConnection.end();
    return result;
  }
  catch (error) {
    return { error };
  }
}
