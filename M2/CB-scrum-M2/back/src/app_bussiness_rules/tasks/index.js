const task_model = require("../../models/task_model")
const { get } = require("./use_cases/get")
const { post } = require("./use_cases/post")
const { update } = require("./use_cases/update")
const { finalize } = require("./use_cases/finalize")

const get_task = get(task_model)
const post_task = post(task_model)
const update_tasks = update(task_model)
const finalize_tasks = finalize(task_model)

module.exports = {
    get_task,
    post_task,
    update_tasks,
    finalize_tasks
}