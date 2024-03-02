const express = require('express');
const app = express();
const lesson1Controller = require('../controllers/lesson1');

const port = 3000;

app.use('/', require('./routes/index'));

/* app.use('/', require('./routes')); */
/*
app.get('/', lesson1Controller.JessicaRoute); 
app.get('/Chandler', lesson1Controller.ChandlerRoute); 
app.get('/Elyse', lesson1Controller.ElyseRoute); 
moved to index.js */

app.listen(process.env.port || port);
console.log('Web Server is listening at port '+ (process.env.port || port));