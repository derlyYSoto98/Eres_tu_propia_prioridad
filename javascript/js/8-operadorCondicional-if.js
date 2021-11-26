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

var edadpasajero= 10;
var costoTiquete = 250000;
var destinoPasajero ="Cartagena";
var destinoOferta= "Cartagena";
var aerolineaPasajero = "Latam";
var aerolineaOferta = "Latam";

var descuentofertaEdad=10;
var descuentofertaDestino=10;
var descuentofertaAerolinea=10;

var descuento1=0;
var descuento2=0;
var descuento3=0;

var subtotal=0;
var total=0;
var totalfinal=0;

if (edadpasajero <= 10 ) {
   descuento1= (costoTiquete * descuentofertaEdad)/ 100;
   subtotal= costoTiquete - descuento1;
   console.log("El valor del tiquete es de $"+costoTiquete+" y el pasajero tiene menos de 10 año, por lo tanto se le aplica la oferta de descuento de 10% que equivale a $" + descuento1 + "del costo inicial por lo tanto su final a pagar es de $"+ subtotal);

   if(destinoPasajero === destinoOferta){
    descuento2= (subtotal * descuentofertaDestino)/100;
    total= subtotal - descuento2;
    console.log("Su destino es " + destinoOferta + ", y por hoy tiene oferta del 10% de descuento de su costo anterior, su costo anterior era de $"+ subtotal+ " y ahora se le aplica el descuento de $"+ descuento2+ " asi que su total a pagar es de $"+ total);
   }

   if (aerolineaPasajero === aerolineaOferta) {
     descuento3= (total * descuentofertaAerolinea)/100;
     totalfinal= total - descuento3;
     console.log("Sorpresa!! Nuestra aerolinea "+ aerolineaOferta+ " tiene hoy un 10% de descuento sobre tu costo anterior equivalente a $" + total+ " y por lo tanto su total a pagar es de $" + totalfinal);   
   } 
}else {
    console.log("El pasajero tiene mas de dies años, su destino es " + destinoPasajero + " , su aerolinea es "+ aerolineaPasajero + " y su total a pagar es de $"+ costoTiquete);
}
