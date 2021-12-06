"use strict"
// Numero fijo de decimales
 var uno= 12.525877;
 var unoFixed=uno.toFixed(2);
 console.log(unoFixed); 


//  Numero fijo de decimale sin redondear
 var dos= 12547896.54444;
 var dosStr=dos.toString();
 
 for(let i=0; i < dosStr.length; i++){
     if(dosStr[i] === "."){
         var cantDigito = i;
     }
 }
 console.log(cantDigito); 
 dosStr= dosStr.slice(0, (cantDigito + 3));
 console.log(parseFloat (dosStr));