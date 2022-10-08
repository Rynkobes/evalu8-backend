const express = require('express')

const router = express.Router()

// API's FOR USER

router.get('/user', (req, res) => {
    res.send('still working')
})

router.get('/user/:_id', (req, res) => {
    res.send('still working')
})

module.exports = router