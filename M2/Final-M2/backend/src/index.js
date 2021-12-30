const express = require("express");
const cors = require("cors")
const {connectDB} = require("./frameworks_and_drivers/drivers/mongo");
const { router } = require("./routes/index");
const { port } = require("./frameworks_and_drivers/drivers/config");

const app = express();
const PORT = port
const PATH = '/api/v1/'

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }))
app.use(cors());
app.use(PATH, router);

app.get('/liveness', (req, res) => res.send({state: "ok"}))

app.listen(PORT, () => {
    connectDB()
    console.log(`Application starts at port: ${PORT}`)
})