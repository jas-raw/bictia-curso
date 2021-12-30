const express = require("express");
const usuarios = express.Router();
const {UserController} = require('../controllers/user_controller')

const user = new UserController()

usuarios.post('/', user.create_user)

module.exports = {
    usuarios
}