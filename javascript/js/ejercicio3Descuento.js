"use strict"
var compra = 322000;

var desCompra100=3;
var limite1=100000;

var desCompra200=5;
var limite2=200000;

var desCompra300=8;
var limite3=300000;

var descuento=0;
var total = 0; 

 if (compra >= limite1 && compra<= 199000) {
    descuento = (compra * desCompra100) / 100;
    total = compra - descuento;
    console.log("La compra fue de $" + compra + " y obtuvo un descuento de  $" + descuento + " equivalente a 3%  por lo tanto su final a pagar es de $" + total );
    }else if (compra >= limite2 && compra<= 299000) {
    descuento = (compra * desCompra200) / 100;
    total = compra - descuento;
    console.log("La compra fue de $" + compra + " y obtuvo un descuento de  $" + descuento + " equivalente a 5%  por lo tanto su final a pagar es de $" + total );
    }else if (compra >= limite3) {
    descuento = (compra * desCompra300) / 100;
    total = compra - descuento;
    console.log("La compra fue de $" + compra + " y obtuvo un descuento de  $" + descuento + " equivalente a 8%  por lo tanto su final a pagar es de $" + total );
}
else{
    console.log('Su compra fue de $' + compra + ' y no alcanza para descuento por lo tanto su total a pagar es de $'+ compra);
}
 
