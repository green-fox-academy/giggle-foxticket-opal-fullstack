import mysql from 'mysql';

import config from '../config';

const pool = mysql.createPool({
  connectionLimit: 2,
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
});

async function getDbStatus() {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query('SELECT 1 as val');
    console.log(rows);
    const res = await conn.query('INSERT INTO myTable value (?, ?)', [
      1,
      'giggle-opal',
    ]);
    console.log(res);
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    if (conn) return conn.end();
  }
}

export const db = {
  query(query, values) {
    return new Promise((resolve, reject) => {
      pool.query(query, values, (err, results, fields) => {
        console.log(config);
        if (err) {
          reject(err);

          return;
        }

        resolve({ results, fields });
      });
    });
  },
};
