let express = require("express");
let app = new express();                                                                     
app.set("view engine","ejs");

// set up database connection
const knex = require("knex")({
 client: "mysql2",
 connection: {
  host: "concert-db.cf8cwmywif2v.us-west-1.rds.amazonaws.com",
  user: "admin",
  password: "concertdb",
  database:"paradise-concerts",
  port: 3306,
 },
});

app.get("/",(req,res) => {
 knex
 .select()
 .from("venues")
 .then((result) => {
  res.render("index", {aConcerts: result});
 });
});
app.listen(3000);

