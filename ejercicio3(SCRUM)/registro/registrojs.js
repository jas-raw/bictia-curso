
var boton = document.getElementById("boton")


boton.addEventListener("click", function(e){
    var costo = 0
    e.preventDefault()
    var a = document.getElementById("marca").value
    var b = document.getElementById("modelo").value
    var c = document.getElementById("ident").value
    var d = document.getElementById("Chasis").checked
    var e = document.getElementById("Interior").checked

    if (a=="" || b=="" || c==""){
        alert("Debe ingresar toda la informacion del cliente")
        console.log(d)
        console.log(e)
    }else{
        if(e== false && d==false){
            alert("Debe seleccionar por lo menos un servicio")
        }
        else{
            if(e==true && d==false){
                costo=costo+15000
            }
            if(e==false && d==true){
                costo = costo+10000
            }
            if(e==true && d==true){
                costo = costo+25000
            }

           if(confirm("El usuario identificado con: "+c+" con el vehiculo marca: "+a+" de modelo "+b+ " Facturo un servicio por: $"+costo)){
            window.location.href = "agradecimiento.html"
           }
      
    }
    }



})