const { login } = require("./use_cases/login")
const user = require('../../models/user_model')
const { log } = require('../../frameworks_and_drivers/drivers/logger')
const { generate_token } = require("../../frameworks_and_drivers/drivers/jwt")

const login_user = login(user, generate_token, log)

module.exports = {
    login_user
}