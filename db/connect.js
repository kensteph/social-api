import mysql from "mysql";

export const db1 = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "K@i14969",
  database: "social",
});

export const db = mysql.createPool({
  connectionLimit: 100,
  waitForConnections: true,
  queueLimit: 0,
  host: "localhost",
  user: "root",
  password: "K@i14969",
  database: "social",
  debug: false,
  wait_timeout: 28800,
  connect_timeout: 10,
});
