// Importar módulo express
const express = require('express')

// Importar módulo mysql

const mysql = require('mysql2')

// App

const app = express()

// Configuração de conexão
const conexao = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'552510',
    database:'projeto'
})

// Teste de conexão
conexao.connect((err) => {
    if(err) throw erro
    console.log('Conexão efetuada com sucesso!')
})

// Rota Hello World
app.get('/', function(req, res){
    res.write('Aprendendo Node.js e MySQL')
    res.end()
})

// Servidor 

app.listen(8080)