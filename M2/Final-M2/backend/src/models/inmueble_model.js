const {Schema, model} = require("mongoose");

const inmueble_model_schema = new Schema({
    tipo:{
        type: String
    },
    no_habitaciones:{
        type: Number
    },
    no_banos:{
        type: Number
    },
    patio:{
        type: Boolean
    },
    no_pisos:{
        type: Number
    },
    sector:{
        type: String
    },
    cocina_integral:{
        type: Boolean
    },
    descripcion:{
        type: String
    },
    valor:{
        type: Number
    },
    nombre_asesor:{
        type: String
    },
    telefono_asesor: {
        type: String
    },
    imagenes: {
        type: Array
    }
});

module.exports = model("inmueble_model",inmueble_model_schema,"inmuebles")