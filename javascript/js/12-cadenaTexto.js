"use strict"
// Todo a mayuscula
var frase1=" EstA eS UNA fRASE  Mayuscula";
var fraeMayus=frase1.toUpperCase();
console.log(fraeMayus);



// TODO A MINUSCULA
var frase2=" EstA eS UNA fRASE  MINUSCULA";
var fraseMIN=frase2.toLocaleLowerCase();
console.log(fraseMIN);

// Primera letra en mayuscula y el resto en minuscula


// slice
var frase3 ="esta frase TiENE La priMERa letra en MaYuscULA y EL REsto EN MinUscUla";
frase3= frase3.toLowerCase();
frase3= frase3[0].toUpperCase() + frase3.slice(1);
console.log(frase3);

// Metodo slice
var frase4 = "En Pitalito todo se vive mejor";
var municipio = "San Agustin";
frase4= frase4.slice(0,3) + municipio + frase4.slice(11);

console.log(frase4);

