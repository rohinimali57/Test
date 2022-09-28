// Requiring users file
const {loadUser} =require('./user_model');
const { request, response } = require("express");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
// import cors from 'cors';
// import dotenv from 'dotenv';
// import express from './node_modules/express';

const app=express();

const port=5000;
// console.log(users);
dotenv.config();
app.use(cors());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

app.listen(port,()=>console.log('server running...'))

app.get('/api',(request,response)=>
    response.send('succesfull welcome'));

app.get('/api/users',(request,response)=>{
    response.send(loadUser());
});
