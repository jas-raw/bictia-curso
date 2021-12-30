const { secret_key } = require("./config")
const jwt = require('jsonwebtoken')

const generate_token = (nombre, email, telefono)=>{
    return jwt.sign({
        nombre,
        email,
        telefono
    },secret_key)
}

const verify_token = (tk) => {
    return jwt.verify(tk, secret_key)
}

module.exports = {
    verify_token,
    generate_token
}