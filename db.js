import 'dotenv/config'; // se o terminal dar um erro dotenv not found  colocar  "npm install --save dotenv" no terminal
import postgres from 'postgres';

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: false,
});

export { sql };