const path = require('path');
const fs = require('fs')

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('<h1>Hola, estamos en la pagina principal</h1>')
});

app.get('/productos', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/productos.html'))
  });

 /*app.get('/productos/1', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/producto1.html'))
  })*/

  /* rutas dinamicas*/
  /*app.get('/productos/:id', function (req, res) {
   
    const id = req.params.id;
    
    res.send(`producto #${id}`)
  })*/

  /*Ruta dinmica para cargar vista desded html*/ 
    /*app.get('/productos/:id', function (req, res) {
   
    const id = req.params.id;

    if(fs.existsSync(path.join(__dirname, `views/producto${id}.html`))){

      res.sendFile(path.join(__dirname, `views/producto${id}.html`));
    }
      res.sendFile(path.join(__dirname, `views/error.html`));
    
    
  })*/
/*mejoramiento del codigo*/
  /*app.get('/productos/:id', function (req, res) {
   
    const id = req.params.id;

    const ruta = path.join(__dirname, `views/producto${id}.html`)

    if(fs.existsSync(ruta)){

      res.sendFile(ruta);
    }
      res.sendFile(path.join(__dirname, `views/error.html`));
    
    
  })*/

  /*optimizacion con Ternarios*/ 
  app.get('/productos/:id', function (req, res) {
   
    const id = req.params.id;

    const filePath = path.join(__dirname, `views/producto${id}.html`)
    
    const ruta = fs.existsSync(filePath)
      ? filePath
      :path.join(__dirname, `views/error.html`)

      res.sendFile(ruta)
    
  })

app.listen(3000)