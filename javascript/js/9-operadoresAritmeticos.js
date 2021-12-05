"use strict"

/* AND.......&& (Y)
   OR.......|| (O)
   NOT.......! (Negacion)
   XOR.......^ (O exclusivo)
*/

/* Para poder acceder al subsidio de transporte es necesario que el aprendiz cuente con SISBEN o Jovenes en Accion para poder acceder al beneficio. Si el aprendiz cuente con los dos beneficios no podra acceder al subsidio */

var beneficioSisben = false;
var beneficioJovenes = false;

if (beneficioSisben ^ beneficioJovenes ) {
    console.log('El aprendiz puede acceder al beneficio de transporte');
}else{
    console.log('El aprendiz no puede acceder al beneficio de transporte');
}
