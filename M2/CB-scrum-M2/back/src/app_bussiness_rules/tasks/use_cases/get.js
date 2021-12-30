function get(task){
    return function get_tasks(user){
        return task.find({'user': {$eq: user}})
    }
}

module.exports = {
    get
}