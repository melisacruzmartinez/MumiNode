const express = require('express');
const app = express();
const http = require('http');
const port = 8080;


const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end();
});

//Configuracion del setting de la app
app.set(port);
// Configuracion del midleware 
app.use(express.json());
app.use(require('./routes/index.js'));

//Start server

server.listen(port, localhost => {
    console.log(`Server running at http://${port}/`);
});