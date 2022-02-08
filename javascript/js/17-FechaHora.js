"use strict"


// Obtener fecha y hora actual
var currentTime= new Date;
console.log(currentTime);

// Metodos para extraer elementos

var anyoActual = currentTime.getFullYear();
console.log("AÑO ACTUAL:  " + anyoActual); 


var mesActual= currentTime.getMonth();
console.log("Mes Actual:  " +(mesActual + 1));

var diamesActual= currentTime.getDate();
console.log("Dia del mes: " + diamesActual);

var diaSemana = currentTime.getDay();
console.log("Dia de la semana : " +(diaSemana + 1));

var horaActual = currentTime.getHours();
console.log("Hora Actual: " + horaActual);

var minutosActual= currentTime.getMinutes();
console.log("Minuto Actual: " + minutosActual);

var segundoActual= currentTime.getSeconds();
console.log("Segundo Actual: " + segundoActual);

var milisegActual = currentTime.getUTCMilliseconds();
console.log("Milisegundo Actual: " +  minutosActual);

var ms1970 = currentTime.getTime();
console.log(ms1970);


// Determinar cuntos dias falta para nuevo año

var fechaNewYear = new Date("January 1, 2022");
var msFechaNewyear= fechaNewYear.getTime();
var msCurrenTime = currentTime.getTime();
var msFaltantes = msFechaNewyear - msCurrenTime;
console.log(msFaltantes);


var minutoFechaNewYear= (((msFaltantes / 1000)/60)/60/24);
console.log("Faltan: "+Math.ceil(minutoFechaNewYear)+" dias para que se acabe el año");