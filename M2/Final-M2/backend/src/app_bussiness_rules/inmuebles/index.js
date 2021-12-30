const { create } = require("./use_cases/create")
const { search } = require("./use_cases/search")
const inmueble = require("../../models/inmueble_model")
const { log } = require('../../frameworks_and_drivers/drivers/logger')

const create_inmueble = create(inmueble, log)
const get_inmueble = search(inmueble, log)

module.exports = {
    create_inmueble,
    get_inmueble
}