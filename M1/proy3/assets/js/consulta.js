var container = document.getElementById('data')
const add = (ac, n) => {
    return ac + n
}
document.getElementById("search").addEventListener("click", (e) => {
    e.preventDefault()
    let id = document.getElementById("searchId")
    if(id.value){
        let datos = JSON.parse(localStorage.getItem(id.value))
        container.innerHTML = `<h1>${datos.studentName} - ${id.value}</h1><div>`
        datos.notes.forEach((note, index) => {
            container.innerHTML = container.innerHTML+`<span>Nota ${index + 1}: ${note}</span><br>`
        })
        let notes = datos.notes.map(it => parseFloat(it))
        let sum = notes.reduce(add)
        let promedio = sum / datos.notes.length
        container.innerHTML = container.innerHTML+`</div><div>Su promedio fue: ${promedio}</div>`
        if(promedio >= 3){
            container.innerHTML = container.innerHTML+`<h2>Felicidades, pasaste.</h2>`
        }else{
            container.innerHTML = container.innerHTML+`<h2>Lo sentimos, esta vez no pasaste.</h2>`
        }
    }else{
        alert('Ingresa un ID para buscar')
    }
})