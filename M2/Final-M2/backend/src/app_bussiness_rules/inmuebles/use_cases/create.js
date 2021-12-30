function create(modelo, log){
    return async function create_inmueble(new_inmueble, user){
        log(`Datos a guardar ${JSON.stringify(new_inmueble)} por el usuario ${user.email}`)
        const inmueble = new_inmueble
        inmueble["nombre_asesor"] = user.nombre
        inmueble["telefono_asesor"] = parseInt(user.telefono)
        let data
        try{
            data = await modelo.create(inmueble)
        }catch(e){
            data = {error: `No se pudo crear, error: ${e}`}
        }
        log(`Operación finalizada con salida: ${JSON.stringify(data)}`)
        return data
    }
}

module.exports = {
    create
}