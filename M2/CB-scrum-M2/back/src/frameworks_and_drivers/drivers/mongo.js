const mongoose = require("mongoose")
const { url_db, db } = require("./config")

const db_con = url_db+db

const connectDB = async () =>{
    try{
        await mongoose.connect(db_con).then(()=>{
            console.log(`Conectado a base de datos: ${db}`)
        })
    }catch(err){
        console.log(err.message)
    }
}

module.exports = {
    connectDB
}