const { create_inmueble, get_inmueble } = require("../app_bussiness_rules/inmuebles/index")
const { SUCCESSFUL, SERVERERROR, CREATED } = require("../frameworks_and_drivers/drivers/config")
class InmuebleController{

    async create_inmueble(req,res){
        const inmueble = req.body
        const user = req.user
        let data = await create_inmueble(inmueble, user)
        if(data.error){
            return res.status(SERVERERROR).send(data)
        }
        return res.status(CREATED).send(data)
    }

    async get_inmueble(req, res){
        const filter = req.filter
        let data = await get_inmueble(filter)
        return res.status(SUCCESSFUL).send(data)
    }

}

module.exports = {
    InmuebleController
}