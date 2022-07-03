const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "_MstCf117_",
  database: "leal_db",
  host: "localhost",
  port: 5432,
});

module.exports = pool;
