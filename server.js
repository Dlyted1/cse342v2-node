const express = require('express');

const mongodb = require('./data/database');
const app = express();

const port = process.env.PORT || 3000;

app.use('/', require('./routes'));

mongodb.initDb((err) => {
    if(err) {
        console.log(err);
    }
    else {
        
        app.listen(port, () => {console.log(`Database is listening and node running on port ${port}`)});

    }
});

/*
app.get('/', lesson1Controller.JessicaRoute); 
app.get('/Chandler', lesson1Controller.ChandlerRoute); 
app.get('/Elyse', lesson1Controller.ElyseRoute); 
moved to index.js */

/*
app.listen(process.env.port || port);
console.log('Web Server is listening at port '+ (process.env.port || port)); */