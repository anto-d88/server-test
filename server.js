
/*// importation des moddul
var express = require('express');
//instentier server
var server = require();
// configurer la route
server.get('/', fonction (req, res),{
    res.setHeader('Content-Type', 'text/html'),
    res.status(200).send('<h1>Bonjour</h1>'),
});
//launch server
server.listen(8080, fonction(), {
    console.log('server en ecoute')
})*/
const http = require("http");
const host = 'localhost';
const port = 8000;
const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server!");
};const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});