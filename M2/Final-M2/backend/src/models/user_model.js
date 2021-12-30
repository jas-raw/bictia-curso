const {Schema, model} = require("mongoose");

const user_model_chema = new Schema({
    nombre:{
        type: String
    },
    email:{
        type: String,
        unique: true
    },
    telefono:{
        type: Number
    },
    password:{
        type: String
    }
});

module.exports = model("user_model",user_model_chema,"users")