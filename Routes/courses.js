const express = require('express')

const router = express.Router()

router.get('/courses', (req, res) => {
    res.send('here are all your courses')
})

module.exports = router