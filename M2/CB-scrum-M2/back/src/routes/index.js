const express = require("express");
const { tasks } = require("./task_router");
const {usuarios} = require('./user_routes')

const router = express.Router();

router.use('/users', usuarios)
router.use('/tasks', tasks)

module.exports = {
    router
}