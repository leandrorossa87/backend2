const path = require('path');

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('<h1>Hola, estamos en la pagina principal</h1>')
});

app.get('/productos', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/productos.html'))
  });

  app.get('/productos/1', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/producto1.html'))
  })



app.listen(3000)