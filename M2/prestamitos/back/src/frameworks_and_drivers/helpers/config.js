require('dotenv').config();
const emailPass = process.env.EMAIL
const pass = process.env.PASS

module.exports = {
    emailPass,
    pass
}