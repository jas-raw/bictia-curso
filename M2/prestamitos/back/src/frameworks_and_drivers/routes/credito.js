const express = require('express')
const service = require('../../bussines_rules/index')

const credito = express.Router()

credito.post("/", (req, res) => {
    const info = req.body
    const result = service.evaluate_credit(info)
    res.status(200).send(result)
})

module.exports = credito