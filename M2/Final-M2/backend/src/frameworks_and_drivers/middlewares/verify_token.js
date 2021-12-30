const { UNAUTHORIZED } = require("../drivers/config")
const { verify_token } = require("../drivers/jwt")
const {log} = require('../drivers/logger')

const verify_tk = (req,res, next)=>{
    let jwToken = req.header('Authorization')
    if(!jwToken) {
        log('Unauthorized creation')
        return res.status(UNAUTHORIZED).send({"msg":"Acceso denegado, No hay token"})
    }
    jwToken = jwToken.split(' ')[1]
    if(!jwToken)  {
        log('Unauthorized creation')
        return res.status(UNAUTHORIZED).send({"msg":"Acceso denegado, No hay token"})
    }
    try{
        let payload = verify_token(jwToken)
        req.user = payload
        next()
    }catch(err){
        log('Unauthorized creation')
        res.status(UNAUTHORIZED).send({"msg":"Token no válido"})
    }
}

module.exports = {
    verify_tk
}