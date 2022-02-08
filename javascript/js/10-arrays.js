"use stric"

/* Forma de declarar arreglos */
/* Forma 1 */
var aprendiz = new Array();
aprendiz[0]= 352;
aprendiz[1]="CC";
aprendiz[2]="1080564321";
aprendiz[3]="Vicente";
aprendiz[4]="fernandez";
aprendiz[5]="3215645567";

/* forma 2 */
var instructor = new Array(123, "CC", "32456743", 95, "TIC", "Jesus", "Calderon");

/* Forma 3 */
var sedes = [24, "Yamboro", 41551, "James Ramirez"];
console.log("El aprendiz " + aprendiz[3]+ "  " + aprendiz[4] + " cuyo lider es " + " el Instructor " + instructor[5] + "" 
+ instructor[6] + " pertenece a" + " "+ "la sede " + sedes[1]);

/* Propiedad Length */
console.log('El arreglo instructor tiene ' + instructor.length + ' elementos');
console.log('El elemento 7 de instructor tien ' + instructor[6].length + ' caracteres');