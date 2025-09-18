const express = require('express')
const cors = require('cors')
const aiRoutes = require('./routes/ai.routes') // <-- Add this line
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/ai', aiRoutes)

module.exports = app