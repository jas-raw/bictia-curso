const { secret_key } = require("./config")
const jwt = require('jsonwebtoken')

const generate_token = ()=>{
    return jwt.sign({
        _id: this._id,
        nombre: this.name,
        email: this.email
    },secret_key)
}

const verify_token = (tk) => {
    return jwt.verify(tk, secret_key)
}

module.exports = {
    verify_token,
    generate_token
}