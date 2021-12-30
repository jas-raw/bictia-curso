const express = require("express");
const inmuebles = express.Router();
const { InmuebleController } = require('../controllers/inmueble_controller');
const { filtered } = require("../frameworks_and_drivers/middlewares/filter");
const { verify_tk } = require("../frameworks_and_drivers/middlewares/verify_token");

const inmueble = new InmuebleController()

inmuebles.post('/', verify_tk, inmueble.create_inmueble)
inmuebles.get('/', filtered, inmueble.get_inmueble)

module.exports = {
    inmuebles
}