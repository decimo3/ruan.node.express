const express = require('express');
const path = require('path');
const jwt = require('express-jwt');
require('dotenv').config()

const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/user', (req, res)=>{
  res.status(200).send(req.query);
});

app.get('/protect', jwt({
  secret: process.env.SECRET_KEY,
  algorithms: [process.env.ALGORITHM]
}),(req, res)=>{
  res.status(200).send(req.query);
});

app.listen(process.env.PORT, 'localhost',()=> {
  console.log("Servidor está ouvindo na porta 8080");
});