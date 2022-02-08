"use strict"

// conversion Implicita
var uno=12;
var dos= "4";
console.log("La suma de los numeros es : " + (uno + dos));
console.log("La resta de los numeros es : " + (uno - dos));
console.log("La multiplicacion de los numeros es : " + (uno * dos));
console.log("La division de los numeros es : " + (uno / dos));

// conversion Explicita a enteros

var tres ="4";
var tresP = parseInt(tres);
var cuatro="12";
var cuatroP= parseInt(cuatro);
console.log("La suma de los numeros es: " + (tresP + cuatroP));


// conversion Explicita a DECIMALES
var cinco ="4";
var cincoP = parseFloat(cinco);
var seis="11.5";
var seisP= parseFloat(seis);
console.log("La suma de los numeros es: " + (cincoP + seisP));

// conversion Explicita a enteros
var siete =12;
var sieteE = siete.toString();
var ocho=21;
var ochoE= ocho.toString();
console.log("La suma de los numeros es: " + (sieteE + ochoE));