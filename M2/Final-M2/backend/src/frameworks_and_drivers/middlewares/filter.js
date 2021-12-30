const { regex_search } = require("../drivers/text_utilities")

const filtered = (req, res, next) => {
    const query = req.query
    let filter = {}
    for(let property in query){
        switch(property){
            case 'no_banos':
            case 'no_pisos':
            case 'no_habitaciones':
            case 'valor':
                filter[property] = parseInt(query[property])
                break
            case 'patio':
                filter[property] = Boolean(query[property])
                break
            case 'sector':
                filter[property] = regex_search(query[property])
                break
            default:
                break
        } 
    }
    req.filter = filter
    next()
}

module.exports = {
    filtered
}