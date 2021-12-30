require('dotenv').config();

url_db = process.env.MONGO_URL
db = process.env.DB
port = process.env.PORT
secret_key = process.env.SECRET_KEY


module.exports = {
    port,
    url_db,
    db,
    secret_key
}