const router = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

router.use('/', require('./swagger'));
router.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    //#swagger.tags=['users]
    res.send('Hello World');
})

router.get('/', lesson1Controller.JessicaRoute); 
router.get('/Chandler', lesson1Controller.ChandlerRoute); 
router.get('/Elyse', lesson1Controller.ElyseRoute); 

router.use('/users', require('./users'));

module.exports = router;
