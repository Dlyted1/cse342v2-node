const JessicaRoute = (req, res) => {
    res.send('Jessica Moore');
}; 

const ChandlerRoute = (req, res) => {
    res.send('Chandler Moore');
}; 

const ElyseRoute = (req, res) => {
    res.send('Elyse Moore');
}; 

module.exports = {
    JessicaRoute,
    ChandlerRoute,
    ElyseRoute
};