const express = require('express');

const mongodb = require('./data/database');

const app = express();

// const swaggerAutogen = require('swagger-autogen')();

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

