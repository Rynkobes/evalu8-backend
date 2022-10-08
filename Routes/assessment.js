const express = require('express')

const router = express.Router()

router.get('/assessment', (req, res) => {
    res.send('route to all assessments')
})

router.post('/assessment', (req, res) => {
    res.send('new assessment created')
})

router.put('/assessment/:_id', (req, res) => {
    res.send('assessment updated')
})

module.express = router