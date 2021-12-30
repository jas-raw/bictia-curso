const express = require("express");
const usuarios = express.Router();
const { UserController } = require('../controllers/user_controller')

const user = new UserController()

usuarios.post('/login', user.login)

module.exports = {
    usuarios
}