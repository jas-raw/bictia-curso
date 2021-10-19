const name = document.getElementById('name')
const address = document.getElementById('address')
const tel = document.getElementById('tel')
const email = document.getElementById('email')
const check = document.getElementById('treat')

document.getElementById('btnSuscrip').addEventListener('click', () => {
    console.log(check.value)
    if(check.value === 'on'){
        name.value = ''
        address.value = ''
        tel.value = ''
        email.value = ''
        alert('se suscribio correctamente')
    }else{
        alert('debe aceptar el tratamiento de datos antes de continuar')
    }
})