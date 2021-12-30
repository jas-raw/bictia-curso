const express = require("express");
const {usuarios} = require('./user_routes')
const {inmuebles} = require('./inmueble_routes')

const router = express.Router();

router.use('/users', usuarios)
router.use('/inmuebles', inmuebles)

module.exports = {
    router
}