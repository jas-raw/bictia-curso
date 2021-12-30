const {Schema, model} = require("mongoose");

const task_model_chema = new Schema({
    name:{
        type: String
    },
    user:{
        type: String
    },
    create_at:{
        type: Date
    },
    update_at:{
        type: Date,
        nullable: true
    },
    finalize_at:{
        type: Date,
        nullable: true
    }
});

module.exports = model("task_model",task_model_chema,"tasks")