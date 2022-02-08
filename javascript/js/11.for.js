"use strict"
/* Generar un consecutivo 
for (var i = 0; i<= 10; i++) {
    console.log( 'Aprendiz N° ' + i);
    
}*/

var aprendiz = new Array();
aprendiz[0]= 352;
aprendiz[1]="CC";
aprendiz[2]="1080564321";
aprendiz[3]="Vicente";
aprendiz[4]="fernandez";
aprendiz[5]="3215645567";

var instructor = new Array(123, "CC", "32456743", 95, "TIC", "Jesus", "Calderon");
var sedes = [24, "Yamboro", 41551, "James Ramirez"];


/* console.log("Datos del Aprendiz: ");
for (var i = 1; i< aprendiz.length; i++) {
    console.log( aprendiz[i]);
    
} */

for (var i = 1; i<21; i+2) {
    console.log( aprendiz[i]);
    console.log([i]);
}



