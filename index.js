const Express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser')
const App = Express()

//CONFIGURAÇÕES DO SERVER 
App.use(cors())
App.use(bodyParser.urlencoded({ extended: false }))
App.use(bodyParser.json())
const banco = mysql.createConnection({
        host: 'localhost', 
        user: 'root', 
        password: '', 
        database: 'mysql_api'
    })
banco.connect() ? console.log('banco conectado') : console.log('banco não conectado')

//ROTAS
App.get('/', (req,res) => {
    res.send('Welcome, server is running')
})
//CREATE
App.post('/post', (req,res)=>{
    const nome = req.body.nome
    const sobrenome = req.body.sobrenome
    const cpf = req.body.cpf

    let command = 'INSERT INTO registros VALUES (DEFAULT,?,?,?)'
    let response = banco.query(command, [nome, sobrenome, cpf])
})
//READ
App.get('/get', (req, res) => {
    banco.query('SELECT * FROM registros', (err, result) => {res.send(result)})
})
//UPDATE
App.put('/update', (req, res) => {
    const nome = req.body.nomeUpdate == null ? req.body.orignome : req.body.nomeUpdate
    const sobrenome = req.body.sobrenomeUpdate == null ? req.body.origsobrenome : req.body.sobrenomeUpdate
    const cpf = req.body.cpfUpdate == null ? req.body.origcpf : req.body.cpfUpdate
    const id = req.body.id

    const command = 'UPDATE registros SET nome=?, sobrenome=?, cpf=? WHERE id=?'

    banco.query(command,[nome,sobrenome,cpf,id])


})
//DELETE
App.delete('/delete', (req, res) => {
    const id = req.body.id
    const command = 'DELETE FROM registros WHERE id=?'
    banco.query(command, [id])
})

App.listen(3001, ()=>{
    console.log('server is running')
})