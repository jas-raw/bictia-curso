const regex_search = (search) => {
    let s = ''
    let searching = search.trim().toLowerCase()
    for(let l=0; l < searching.length; l++){
        switch(searching[l]){
            case 'a':
            case 'á':
                s += '[aá]'
                break

            case 'e':
            case 'é':
                s += '[eé]'
                break

            case 'i':
            case 'í':
                s += '[ií]'
                break

            case 'o':
            case 'ó':
                s += '[oó]'
                break

            case 'u':
            case 'ú':
            case 'ü':
                s += '[uúü]'
                break
            
            default:
                s += searching[l]
                break
        }
    }
    return {'$regex': `^.*${s}.*$`, '$options': 'i'}
}

module.exports = {
    regex_search
}