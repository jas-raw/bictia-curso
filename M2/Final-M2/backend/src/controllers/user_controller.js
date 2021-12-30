const { login_user } = require("../app_bussiness_rules/users/index")
const { UNAUTHORIZED } = require("../frameworks_and_drivers/drivers/config")

class UserController{

    async login(req,res){
        const { email, password } = req.body
        let data = await login_user(email, password)
        if(data.token){
            return res.send(data)
        }
        return res.status(UNAUTHORIZED).send(data)
    }

}

module.exports = {
    UserController
}