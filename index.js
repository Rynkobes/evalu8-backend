 

const express = require('express')
const bodyParser = require('body-parser')
const { application } = require('express')

const server = express()
server.use(bodyParser.urlencoded({ extended: true }))

const PORT = process.env.PORT || 3001
const path = __dirname

server.get('/', (req, res) => res.send('Hello evalu8 backend redone!'))
server.get('/login', (req, res) => res.send('Welcome to the Login Page!'))
server.get('*', (req, res) => res.send('Invalid Route!!!'))

server.listen(PORT, () => {
    console.log(`Evalu8 server listeneing on ${PORT}`)
})