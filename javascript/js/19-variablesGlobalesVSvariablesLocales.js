"use strict"

//  variable Global
var theSum = 0;
addNumber();
function addNumber(){
    theSum = 2 + 2;
}
console.log(theSum);

// variable local
var edad = 0;
asignarEdad();
function asignarEdad(){
    edad = 5 + 3;
}
console.log(edad);