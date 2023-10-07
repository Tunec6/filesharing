const bodyParser = require('body-parser')
const express = require('express');
const sqlite3 = require('sqlite3');


let app = express();
app.use(bodyParser.urlencoded);
app.use(bodyParser.json());


const port = 4000; 

app.listen (`${port}`,() =>{
    console.log("Сервер запущен")
});