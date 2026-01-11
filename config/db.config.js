const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "123", // a mesma do pgAdmin
  database: "postgres",
  port: 5432
});

module.exports = pool;
