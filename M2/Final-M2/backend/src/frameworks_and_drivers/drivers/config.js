require('dotenv').config();

const url_db = process.env.MONGO_URL
const db = process.env.DB
const port = process.env.PORT
const secret_key = process.env.SECRET_KEY
const UNAUTHORIZED = 401
const NOTFOUND = 404
const SUCCESSFUL = 200
const CREATED = 201
const SERVERERROR = 500

module.exports = {
    port,
    url_db,
    db,
    secret_key,
    UNAUTHORIZED,
    SUCCESSFUL,
    CREATED,
    NOTFOUND,
    SERVERERROR
}