function finalize(task){
    return function finalize_tasks(user, name){
        return task.findOneAndUpdate({"user": {"$eq": user}, "name": {"$eq": name}}, {$set: {"finalize_at": new Date().toISOString()}})
    }
}

module.exports = {
    finalize
}