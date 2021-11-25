"use strict"
/* 
   suma...+
   resta...- 
   multiplicacion...*
   divicion...../
   residuo.....%
*/

/* Calcular el costo de un producto teniendo en cuenta el impuesto, el domicilio y el descuento */
var costoProducto= 12000;
var impuesto=5; /* 10% */
var domicilio=2500;
var descuento= 20; /* 20% del valor final sin el domicilio */
var costoFinal=0;
var costoImpuesto= 0;
var costoProductoconImp=0;
var costoProductoconDes=0;

 costoImpuesto = (impuesto/100) * costoProducto;
 costoProductoconImp = costoProducto + costoImpuesto;

 descuento =(descuento / 100);
 costoProductoconDes= (costoProductoconImp - (costoProductoconImp * descuento));
 costoFinal = costoProductoconDes + domicilio;
 console.log("El costo final del producto es de:  $" + costoFinal);
 

