const mysql = require('mysql2');
const bcrypt = require('bcrypt');

// Kết nối MySQL
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'web_login_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const db = pool.promise();


module.exports = db;
