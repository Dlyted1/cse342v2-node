const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.JessicaRoute); 
routes.get('/Chandler', lesson1Controller.ChandlerRoute); 
routes.get('/Elyse', lesson1Controller.ElyseRoute); 

module.exports = routes;
