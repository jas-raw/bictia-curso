const { create_user } = require("../app_bussiness_rules/users/index")

class UserController{

    create_user(req,res){
        return res.send(create_user())
    }

}

module.exports = {
    UserController
}