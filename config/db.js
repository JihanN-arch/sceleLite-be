import mysql from 'mysql2/promise';

export const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'J1hanN019',
  database: 'scelelite',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
