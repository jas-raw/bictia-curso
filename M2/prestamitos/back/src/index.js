const service = require('./bussines_rules/index')
const express = require('express')
const cors = require('cors')

const PORT = 8000
const ruta = "/api/v1"
const app = express()
app.use(cors())
app.use(express.json()) 

app.post(ruta+"/credito", (req, res) => {
    const info = req.body
    const result = service.evaluate_credit(info)
    res.status(200).send(result)
})

app.listen(PORT, () => {
    console.log(`Se inicio el servidor en el puerto ${PORT}`)
})