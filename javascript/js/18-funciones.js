

/* No lleva funcion ni retorno (Funcion 1) */

function llamarHora(){
    var now = new Date();
    var hora = now.getHours();
    var minutos = now.getMinutes();
    if( hora < 10){
        hora = "0" + hora;
    }
    if (minutos < 10){
        minutos = "0" + minutos;
    }
    alert("Hora Actual: "+ hora + " : " + minutos);
}

/* Funcion con parametros y sin retorno */
function saludo(bienvenida){
    alert(bienvenida);
}

/* FUNCION CON VARIOS PARAMETROS */
function presentacion(nombre, titulado, ficha){
    alert('Aprendiz: ' + nombre + ' estudiante del tecnologo ' + titulado + ' con ficha de caracterizacion ' + ficha);
}

////
/* funcion con parametros y con retorno */
function validarDescuento(compra){
     /* var compra= 20000;  */
    var total = 0;
    if (compra >= 10000){
        // si la compra es mayor a 10000 tiene un del 10%
        total = compra * .9;
    } 
    else if (compra > 5000 && compra < 9999){
        // descuento del 5%
        total = compra * .95;
    }

    else{
     total = compra;
    }
    return total;
}
// Creamos la funcion de la cual vamos a llamar a la funcion de retorno
function calcDescuento(costo){
   alert("Costo total: " + validarDescuento(costo));
}