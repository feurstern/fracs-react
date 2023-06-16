const mysql = require('mysql');

const dbConnection = mysql.createPool(
  {
  host: '',
  user: '',
  password: '',
  database: '',
  }
);

const query = (sql, values) => {``
  return new Promise((resolve, reject) => {
    dbConnection.getConnection((err, connection) => {
      if (err) {
        reject(err);
      } else {
        connection.query(sql, values, (error, results) => {
          connection.release(); 
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      }
    });
  });
};



module.exports = query;
