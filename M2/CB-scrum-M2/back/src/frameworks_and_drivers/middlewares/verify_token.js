const { verify_token } = require("../drivers/jwt")

const verify_tk = (req,res, next)=>{
    let jwToken = req.header('Authorization')
    if(!jwToken) return res.send({"msg":"Acceso denegado, No hay token"})
    jwToken = jwToken.split(' ')[1]
    if(!jwToken)  return res.send({"msg":"Acceso denegado, No hay token"})
    try{
        let payload = verify_token(jwToken)
        req.user = payload
        next()
    }catch(err){
        res.send({"msg":"Token no válido"})
    }
}

module.exports = {verify_tk}