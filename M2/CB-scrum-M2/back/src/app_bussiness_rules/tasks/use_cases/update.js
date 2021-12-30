function update(task){
    return function update_tasks(user, name){
        return task.findOneAndUpdate({"user": {"$eq": user}, "name": {"$eq": name}}, {$set: {"update_at": new Date().toISOString()}})
    }
}

module.exports = {
    update
}