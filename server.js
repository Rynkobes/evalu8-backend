 

const express = require('express')

const server = express()
const port = 3008

server.get('/', (req, res) => res.send('Hello evalu8 backend redone!'))
server.get('/login', (req, res) => res.send('Welcome to the Login Page!'))

server.listen(port, () => {
    console.log(`Evalu8 server listeneing on ${port}`)
})