"use strict"
let vuelo= [{
    "origen":"BGT",
    "destino":"CTG",
    "precio":375000,
},
{
    "origen":"BGT",
    "destino":"CTG",
    "precio":415000, 
}];

class Latam{
    constructor(origen, destino, precio){
        this.origen=origen,
        this.destino=destino,
        this.precio=precio
    }
}
for (let i = 0; i < vuelo.length; i++) {
    cargarVuelo(vuelo[i].origen);
    
}
function cargarVuelo(origen){
    let contenedor= document.createElement("div");
    let mainconten = document.getElementById("main-conten");
    mainconten.appendChild(contenedor); 

    let origenVuelo = document.createElement("label");
    contenedor.appendChild(origenVuelo);
    let nodoOrigen = document.createTextNode(origen);
    origenVuelo.appendChild(nodoOrigen);

}

