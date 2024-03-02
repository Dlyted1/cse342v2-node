const express = require('express');
const app = express();

const port = 3000;

/* app.use('/', require('./routes')); */
app.get('/', (req, res) => {
     res.send('Jessica Moore');
}); 

app.get('/Chandler', (req, res) => {
    res.send('Chandler Moore');
}); 

app.get('/Elyse', (req, res) => {
    res.send('Elyse Moore');
}); 

app.listen(process.env.port || port);
console.log('Web Server is listening at port '+ (process.env.port || port));