// Importar módulo express
const express = require('express')

// App

const app = express()


// Rota Hello World
app.get('/', function(req, res){
    res.write('Aprendendo Node.js e MySQL')
    res.end()
})

// Servidor 

app.listen(8080)