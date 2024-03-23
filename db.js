const { Pool } = require('pg');
const pool = new Pool({
  user: 'mysql',
  host: 'localhost',
  database: 'proyectopow',
  password: '12345',
  port: 3307, 
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};