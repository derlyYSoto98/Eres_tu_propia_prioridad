"use strict"
let precioUnitario = 112350;
let subt = 0;
function sumarPedido(){
    let cantidadActual = document.getElementById("valor").innerHTML;
    let cantidadInt = Number(cantidadActual);
    if (cantidadInt < 10) {
        sumar = document.getElementById("valor").innerHTML = cantidadInt + 1;    
    }else{
        sumar = document.getElementById("valor").innerHTML = cantidadInt;
    }
    subt = precioUnitario * cantidadInt;
     document.getElementById('subtotal').src;
}
function restarpedido(){
    let cantidadActual = document.getElementById("valor").innerHTML;
    let cantidadInt = Number(cantidadActual);
    if (cantidadInt > 0) {
       let restar = document.getElementById("valor").innerHTML = cantidadInt - 1; 
    }else{
        let restar = document.getElementById("valor").innerHTML = cantidadInt;  
    }
    
}


