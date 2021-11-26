"use strict"

var n1= 300;
var n2= 200;
var n3= 700;
var n4=100;

if ((n1 > n2 && n1 > n3 && n1 > n4 )){
    console.log("El primer producto cuesta  $" + n1 + ",  osea el mas costoso de los 4");
}else if ((n2 > n1 && n2 > n3 && n2 > n4 )){
    console.log("El segundo producto cuesta  $" + n2 + ",  osea el mas costoso de los 4");
}else if ((n3 > n1 && n3 > n2 && n3 > n4 )){
    console.log("El tercer producto cuesta  $ " + n3 + ",  osea el mas costoso de los 4");
}else if ((n4 > n1 && n4 > n2 && n4 > n3 )){
    console.log("El cuarto producto cuesta  $" + n4 + ", osea el mas costoso de los 4");
}

if ((n1 < n2 && n1 < n3 && n1 < n4 )){
    console.log("El primer producto cuesta  $" + n1 + ",  osea el menos costoso de los 4");
}else if ((n2 < n1 && n2 < n3 && n2 < n4 )){
    console.log("El segundo producto cuesta  $" + n2 + ",  osea el menos costoso de los 4");
}else if ((n3 < n1 && n3 < n2 && n3 < n4 )){
    console.log("El tercer producto cuesta  $" + n3 + ",  osea el menos costoso de los 4");
}else if ((n4 < n1 && n4 < n2 && n4 < n3 )){
    console.log("El cuarto producto cuesta  $" + n4 + ",  osea el menos costoso de los 4");
}
   
   

