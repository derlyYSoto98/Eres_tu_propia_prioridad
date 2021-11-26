"use strict"
/* Manera numero 1 */
var contraseña = 1234;
var usuario="abcd";
if (contraseña === 1234 && usuario === "abcd"){
    console.log("Bienvenido");
}else{
    console.log("No se permite acceso!!");
}


/* manera numero 2 */

var usuinput=1234;
var usubd=1234;
var pasinput=5678;
var pasbd= 5678;

if (usuinput===usubd && pasinput===pasbd){
    console.log("Acceso concedido...")
}else{
    console.log("Acceso denegado...")
}