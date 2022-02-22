"use strict"
/* function obtenerNombre(){
    let nombre = document.getElementById("nombreUsuario").iinerHTML;
    alert(nombre);
}
function asignarNombre(){
    let nombreNuevoUsuario ="Derly";
    document.getElementById("nombreUsuario").innerHTML = nombreNuevoUsuario + 1;
} */


function sumarPedido(){
    let cantidadActual = document.getElementById("valor").innerHTML;
    let cantidadInt = Number(cantidadActual);
    if (cantidadInt < 10) {
        sumar = document.getElementById("valor").innerHTML = cantidadInt + 1;    
    }else{
        sumar = document.getElementById("valor").innerHTML = cantidadInt;
    }
    
}
function restarpedido(){
    let cantidadActual = document.getElementById("valor").innerHTML;
    let cantidadInt = Number(cantidadActual);
    if (cantidadInt > 0) {
       let restar = document.getElementById("valor").innerHTML = cantidadInt - 1; 
    }else{
        let restar = document.getElementById("valor").innerHTML = cantidadInt;  
    }
    saludar();
    
}



function saludar() {
    alert("Holis");
}