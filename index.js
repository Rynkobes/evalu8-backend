 

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

const PORT = process.env.PORT || 3001
const path = __dirname

mongoose.connect("mongodb://localhost:27017/evalu8")
    .then(() => {
     console.log('evalu8 db connection open')
    })

    .catch((err) => {
        console.log(err)
    })

app.get('/', (req, res) => res.send('Hello evalu8 backend redone!'))
app.get('/login', (req, res) => res.send('Welcome to the Login Page!'))
app.get('*', (req, res) => res.send('Invalid Route!!!'))

app.listen(PORT, () => {
    console.log(`Evalu8 server listeneing on ${PORT}`)
})