let myModal = new bootstrap.Modal(document.getElementById('exampleModal'))
let result = document.getElementById("result");

const cilindro = (e) => {
    e.preventDefault()
    e.stopImmediatePropagation()
    let radio = document.getElementById("rCil").value;
    let altura = document.getElementById("hCil").value;

    if (radio && altura) {
        fetch(`http://localhost:8080/cilindro?r=${radio}&h=${altura}`,{method:"GET"})
            .then(response => response.json())
            .then(data => {
                console.log(data)
                result.innerHTML = parseFloat(data.area).toFixed(2)
                myModal.show()
                window.stop()
            })
    }
    return false
}

const esfera = (e) => {
    e.preventDefault()
    e.stopImmediatePropagation()
    let radio = document.getElementById("rEsf").value;

    if (radio) {
        fetch(`http://localhost:8080/esfera?r=${radio}`,{method:"GET"})
            .then(response => response.json())
            .then(data => {
                console.log(data)
                result.innerHTML = parseFloat(data.area).toFixed(2)
                myModal.show()
                window.stop()
            })
    }
    return false
}

const cubo = (e) => {
    e.preventDefault()
    e.stopImmediatePropagation()
    let altura = document.getElementById("hCub").value;

    if (altura) {
        fetch(`http://localhost:8080/cubo?h=${altura}`,{method:"GET"})
            .then(response => response.json())
            .then(data => {
                console.log(data)
                result.innerHTML = parseFloat(data.area).toFixed(2)
                myModal.show()
                window.stop()
            })
    }
    return false
}