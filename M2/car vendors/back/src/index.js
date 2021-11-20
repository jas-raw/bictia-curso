const cors = require('cors')
const express = require('express')

const app = express()

const PORT = process.env.PORT || 6000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hi')
})

app.post('/', (req, res) => {
    res.send('Hi')
})

app.listen(PORT, () => console.log(`Opening in port ${PORT}`))