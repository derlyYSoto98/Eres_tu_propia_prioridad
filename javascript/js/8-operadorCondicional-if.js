"use strict"

/* 
Ejercicio 1
validar si el usuario y la contraseña ingresada son las mismas que se encuantran en la base de datos */
var passInput = 12345;
var passBD = 12345;

if (passInput === passBD){
    console.log("Bienvenido");
}

/* Ejercicio 2 
Validar si la persona puede votar. Si no; mostar mensaje*/
var edadUsuario = 5;
var limiteVotacion = 18;
if (edadUsuario >= limiteVotacion ) {
    console.log("Bienvenido a la votacion");
   } else if (edadUsuario < limiteVotacion) {
    console.log("Lo sentimos, usted o puede votar...")    
}
else{
    console.log("Lo sentimos, los datos ingresados deben ser numericos");
}

/* Ejercico 3
if anidado
Una aerolinea presenta la siguiente oferta:
sie el pasajero tiene menos de 10 años tiene un 10% descuent. Si el destino es Cartagena; dicho pasajero tendra otro 10% adicional sobre el valor final
y si la aerolinea es lATAM  tendra otro 10% adicional sobre el valor resultante */

var edadpasajero= 9;
var costoTiquete = 250000;
var destinoPasajero ="Cartagena";
var destinoOferta= "Cartagena";
var aerolineaPasajero = "Latam";
var aerolineaOferta = "Latam";
var total = 0;

if (edadpasajero === 10 ) {
    
}
