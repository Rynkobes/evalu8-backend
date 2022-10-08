const express = require('express')

const router = express.Router()

router.get('/records/:_userId', (req, res) => {
    res.send('there you go')
})

module.exports = router