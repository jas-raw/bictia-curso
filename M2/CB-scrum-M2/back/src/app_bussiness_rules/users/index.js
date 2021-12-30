const { create } = require("./use_cases/create")

const create_user = create()

module.exports = {
    create_user
}