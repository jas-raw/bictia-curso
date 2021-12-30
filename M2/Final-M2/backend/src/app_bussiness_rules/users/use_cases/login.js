function login(modelo, token, log){
    return async function login_user(email, password){
        log(`Login de usuario: ${email}`)
        if(email && password){
            let user = await modelo.findOne({email})
            if(user){
                if(user.password === password){
                    const tk = token(user.nombre, user.email, user.telefono)
                    log('OK login')
                    return {token: tk}
                }
            }
        }
        log('Unauthorized login')
        return {error: "usuario y/o contraseña equivocados"}
    }
}

module.exports = {
    login
}