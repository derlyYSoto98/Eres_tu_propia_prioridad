"use strict"
let valorUnico = 112350;

calcularSubtotal();
valorIndividual();
infoCantidades();

function valorIndividual() {
    let valorUnita = new Intl.NumberFormat('es-ES').format(valorUnico);
    document.getElementById("precioUnitario").innerHTML = valorUnita;
}

function sumarPedido(){
    let cantidadActual = document.getElementById("valor").innerHTML;
    let cantidadInt = Number(cantidadActual);
    let sumar  = 0;
    if (cantidadInt < 10) {
        sumar = document.getElementById("valor").innerHTML = cantidadInt + 1;    
    }else{
        sumar = document.getElementById("valor").innerHTML = cantidadInt;
    }
    calcularSubtotal();  
    infoCantidades();  
}

function restarpedido(){
    let cantidadActual = document.getElementById("valor").innerHTML;
    let cantidadInt = Number(cantidadActual);
    if (cantidadInt > 0) {
       let restar = document.getElementById("valor").innerHTML = cantidadInt - 1; 
    }else{
        let restar = document.getElementById("valor").innerHTML = cantidadInt;  
    }
     calcularSubtotal();
     infoCantidades();  
}

let subTotal = 0;
function calcularSubtotal(){
    document.getElementById("precioUnitario").innerHTML;
    let totalUnidades = document.getElementById("valor").innerHTML;
    let vSubtotal = valorUnico * Number(totalUnidades);
    let vSubtotalFormta = new Intl.NumberFormat('es-ES').format(vSubtotal)
    document.getElementById("subtotal").innerHTML = vSubtotalFormta;
    /* alert("totalUnidades"); */
}
/* Validad la cantidad de productos par el texto */
/* function infoCantidades(){
    let cantidadProductos = document.getElementById("valor").innerHTML;
    let numeroEntero = cantidadProductos;
    document.getElementById("cantidad").innerHTML = numeroEntero;
    validarTextoInfo();
    
} */
/* validar la cantidad para definir el singular o plural */
function infoCantidades() {
    /* Obtener el numero de unidades */
    let cantidadProductos = document.getElementById("valor").innerHTML;
    /* Condicional...Si cantidad productos == a 1 entonces producto si no, productos. */
    if (cantidadProductos == 1) {
        document.getElementById("cantidad").innerHTML = cantidadProductos.toString() + " Producto)";
    }else{
        document.getElementById("cantidad").innerHTML = cantidadProductos.toString() + " Productos)";
    }
}




