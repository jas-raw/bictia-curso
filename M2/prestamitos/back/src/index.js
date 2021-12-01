const express = require('express')
const cors = require('cors')
const credito = require('./frameworks_and_drivers/routes/credito')

const PORT = 8000
const ruta = "/api/v1"
const app = express()
app.use(cors())
app.use(express.json()) 

app.use(ruta+"/credito", credito)

app.listen(PORT, () => {
    console.log(`Se inicio el servidor en el puerto ${PORT}`)
})