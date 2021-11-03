const n1 = document.getElementById('n1')
const n2 = document.getElementById('n2')
const res = document.getElementById('res')

document.getElementById('Sumar').addEventListener('click', (e) => {
    e.preventDefault()
    let num1 = parseFloat(n1.value)
    let num2 = parseFloat(n2.value)
    if(num1 && num2){
        res.innerHTML= 'Su resultado es: '+(num1+num2)
    }else{
        alert('Ingresa ambos valores para hacer la operacion')
    }
})

document.getElementById('Restar').addEventListener('click', (e) => {
    e.preventDefault()
    let num1 = parseFloat(n1.value)
    let num2 = parseFloat(n2.value)
    if(num1 && num2){
        res.innerHTML= 'Su resultado es: '+(num1-num2)
    }else{
        alert('Ingresa ambos valores para hacer la operacion')
    }
})

document.getElementById('Dividir').addEventListener('click', (e) => {
    e.preventDefault()
    let num1 = parseFloat(n1.value)
    let num2 = parseFloat(n2.value)
    if(num1 && num2){
        res.innerHTML= 'Su resultado es: '+(num1/num2)
    }else{
        alert('Ingresa ambos valores para hacer la operacion')
    }
})

document.getElementById('Multiplicar').addEventListener('click', (e) => {
    e.preventDefault()
    let num1 = parseFloat(n1.value)
    let num2 = parseFloat(n2.value)
    if(num1 && num2){
        res.innerHTML= 'Su resultado es: '+(num1*num2)
    }else{
        alert('Ingresa ambos valores para hacer la operacion')
    }
})

document.getElementById('Limpiar').addEventListener('click', (e) => {
    e.preventDefault()
    n1.value = ''
    n2.value = ''
})