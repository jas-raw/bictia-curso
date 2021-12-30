const express = require("express");
const tasks = express.Router();
const {TaskController} = require('../controllers/task_controller');
const { verify_tk } = require("../frameworks_and_drivers/middlewares/verify_token");

const task = new TaskController()

tasks.get('/', verify_tk, task.get_tasks)
tasks.post('/create', verify_tk, task.post_task)
tasks.patch('/update', verify_tk, task.update_task)
tasks.patch('/finalize', verify_tk, task.finalize_task)

module.exports = {
    tasks
}