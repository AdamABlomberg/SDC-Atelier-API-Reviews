const { Pool, Client } = require('pg')
const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, '../.env')});

const pool = new Pool({
  host: process.env.HOST,
  user: process.env.USERNAME,
  port: process.env.DBPORT,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  idleTimeoutMillis: 0,
  connectionTimeoutMillis: 0,
})
// client.connect();

module.exports.pool = pool;

