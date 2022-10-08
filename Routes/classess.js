const express = require('express')

const router = express.Router()

router.get('/classes', (req, res) => {
    res.send('here are all your classes')
})

module.exports = router