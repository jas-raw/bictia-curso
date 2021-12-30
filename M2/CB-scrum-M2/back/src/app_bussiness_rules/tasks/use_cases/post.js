function post(task){
    return function get_tasks(user, name){
        const task_one = {
            user,
            name,
            create_at: new Date().toISOString(),
            update_at: null,
            finalize_at: null
        }
        return task.insertOne(task_one)
    }
}

module.exports = {
    post
}