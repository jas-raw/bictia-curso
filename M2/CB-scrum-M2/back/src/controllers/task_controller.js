const { get_task, post_tasks, update_tasks, finalize_tasks } = require("../app_bussiness_rules/tasks")

class TaskController{

    get_tasks(req,res){
        const {user} = req.user
        const tasks = get_task(user)
        return res.send(tasks)
    }

    post_task(req, res){
        const {user} = req.user
        const {name} = req.body
        const task = post_tasks(user, name)
        return res.send(task)
    }

    update_task(req,res){
        const {user} = req.user
        const {name} = req.body
    }

    finalize_task(req,res){
        const {user} = req.user
        const {name} = req.body
    }

}

module.exports = {
    TaskController
}