
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

const PORT = process.env.PORT || 3001
const path = __dirname

mongoose.connect("mongodb://localhost:27017/evalu8" )
    .then(() => {
     console.log('evalu8 db connection open')
    })

    .catch((err) => {
        console.log(err)
    })

const userSchema = new mongoose.Schema({
        email: String,
        password: String,
        name: String,
        type: String,
        class: String,
        courses: [String]
    })
    
const User = mongoose.model('User', userSchema);
const user = new User({
    name: 'Serena Lucille Bartels',
    email: 'serena@bemasolutions.com',
    type: 'Student',
})

// user.save()

const assessmentSchema = new mongoose.Schema({
    Title: String,
    Category: String,
    Course: String,
    Teacher: String,
    Questions: [{
        question: String,
        options: {

        }
    }],
    correctAnswer: String

})

const Assessment = mongoose.model('Assessment', assessmentSchema)
const assessment = new Assessment()

const courseSchema = new mongoose.Schema({
    name: String,
    Teachers: [String]
})

app.get('/', (req, res) => res.send('Hello evalu8 backend redone!'))
app.get('/login', (req, res) => res.send('Welcome to the Login Page!'))
app.get('*', (req, res) => res.send('Invalid Route!!!'))

app.listen(PORT, () => {
    console.log(`Evalu8 server listeneing on ${PORT}`)
})