function search(modelo, log){
    return async function get_inmueble(filter){
        log(`Filter for data: ${JSON.stringify(filter)}`)
        let sal = await modelo.find(filter)
        log(`Peticion resuelta, datos en DB: ${JSON.stringify(sal)}`)
        return sal
    }
}

module.exports = {
    search
}