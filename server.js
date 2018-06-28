const express = require('express');
const app = express();
// Constants
const http = require('http');
const PORT = 3000;
const HOST = '0.0.0.0';
const server = http.createServer(app);
// App
// const pg = require('pg');
// pg.connect('postgres://postgres:123@localhost:5432/practicedocker');


app.get('/', (req, res) => {
  res.send('Hello world\n');
});


server.listen(PORT,function(){
console.log("Listening on port ",PORT)});

console.log("checking complete ",process.env.DATABASE_URL);
