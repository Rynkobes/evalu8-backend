 

const express = require('express')
const bodyParser = require('body-parser')
const { application } = require('express')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

const PORT = process.env.PORT || 3001
const path = __dirname

app.get('/', (req, res) => res.send('Hello evalu8 backend redone!'))
app.get('/login', (req, res) => res.send('Welcome to the Login Page!'))
app.get('*', (req, res) => res.send('Invalid Route!!!'))

app.listen(PORT, () => {
    console.log(`Evalu8 server listeneing on ${PORT}`)
})