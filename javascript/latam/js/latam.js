"use strict"
/* let vuelo= [{
    "origen":"BGT",
    "destino":"CTG",
    "precio":375000,
},
{
    "origen":"BGT",
    "destino":"CTG",
    "precio":415000, 
}]; */
let horaSalida1 = new Date(2022, 4, 5 , 8, 30, 0);
let horaLlegada1 = new Date(2022, 4, 5, 9, 45, 0);

let horaSalida2 = new Date(2022, 3, 30, 8, 10, 0);
let horaLlegada2 = new Date(2022, 3, 30, 9, 50, 0);

window.onload= function(){
    mostrarVuelos();
}
let vuelo=[{
    "origen": "BGT",
    "destino": "CTG",
    "horaDeSalida": horaSalida1.getHours()+ ":" + horaSalida1.getMinutes(),
    "horaDeLlegada": horaLlegada1.getHours()+ ":" + horaLlegada1.getMinutes(),
    "precio": 375000,
    "directo": "Directo",
    "economico": "Mas economico",
},
{
    "origen": "BTG",
    "destino": "CTG",
    "horaDeSalida": horaSalida2.getHours()+ ":" + horaSalida2.getMinutes(),
    "horaDeLlegada": horaLlegada2.getHours()+ ":" + horaLlegada2.getMinutes(),
    "precio": 415000,
    "directo": "Directo",
    "economico": "Mas economico",
},
{
    "origen": "BTG",
    "destino": "CTG",
    "horaDeSalida": horaSalida2.getHours()+ ":" + horaSalida2.getMinutes(),
    "horaDeLlegada": horaLlegada2.getHours()+ ":" + horaLlegada2.getMinutes(),
    "precio": 315000,
    "directo": "Directo",
    "economico": "Mas economico",
}];

class Vuelos{
    constructor(origen, destino, precio,horaSalida,horaLlegada,directo,economico){
        this.origen= origen;
        this.destino= destino;
        this.precio= precio;
        this.horaSalida= horaSalida;
        this.horaLlegada= horaLlegada;
        // this.directo= directo;
        this.economico= economico;
    }
}
function mostrarVuelos() {
    for (let i = 0; i < vuelo.length; i++) {
    cargarVuelos(vuelo[i].origen, vuelo[i].destino,vuelo[i].precio,vuelo[i].horaDeSalida, vuelo[i].horaDeLlegada, vuelo[i].economico);
    }
}
/* for (let i = 0; i < vuelo.length; i++) {
    cargarVuelo(vuelo[i].origen);
    
} */
function cargarVuelos(origen,destino,precio,horaDeSalida,horaDeLlegada,economico){
    let contenedor=document.createElement("div");
    let contenMain=document.getElementById("main-conten");
    contenMain.appendChild(contenedor);
    contenedor.setAttribute("class", "content-main");

    let origenVuelo=document.createElement("label");
    contenedor.appendChild(origenVuelo);
    let nodoOrigen = document.createTextNode(origen);
    origenVuelo.appendChild(nodoOrigen);
    origenVuelo.setAttribute("class", "style-origen");

    let destinoVuelo=document.createElement("label");
    contenedor.appendChild(destinoVuelo);
    let nodoDestino = document.createTextNode(destino);
    destinoVuelo.appendChild(nodoDestino);
    destinoVuelo.setAttribute("class", "style-destino");

    let precioVuelo=document.createElement("label");
    contenedor.appendChild(precioVuelo);
    let nodoPrecio = document.createTextNode("cop $"+ precio);
    precioVuelo.appendChild(nodoPrecio);
    precioVuelo.setAttribute("class", "style-precio");

    let salidaVuelo=document.createElement("label");
    contenedor.appendChild(salidaVuelo);
    let nodoSalida = document.createTextNode(horaDeSalida+" a.m");
    salidaVuelo.appendChild(nodoSalida);
    salidaVuelo.setAttribute("class", "styleSalida");

    let linea=document.createElement("hr");
    contenedor.appendChild(linea);
    linea.setAttribute("class", "linea");

    let LlegadaVuelo=document.createElement("label");
    contenedor.appendChild(LlegadaVuelo);
    let nodoLlegada = document.createTextNode(horaDeLlegada+ " a.m");
    LlegadaVuelo.appendChild(nodoLlegada);
    LlegadaVuelo.setAttribute("class", "styleLlegada");

    let VueloDirecto =document.createElement("label");
    contenedor.appendChild(VueloDirecto);
    let nodoVueloDirecto = document.createTextNode("Directo");
    VueloDirecto.appendChild(nodoVueloDirecto);
    VueloDirecto.setAttribute("class", "style-VueloDirecto");

    let VueloEconomico=document.createElement("label");
    contenedor.appendChild(VueloEconomico);
    let nodoVueloEconomico = document.createTextNode("Más Económico");
    VueloEconomico.appendChild(nodoVueloEconomico);
    VueloEconomico.setAttribute("class", "styleEconomico");

    let textoDuracion =document.createElement("label");
    contenedor.appendChild(textoDuracion);
    let nodotextoDuracionVuelo = document.createTextNode("Duracion");
    textoDuracion.appendChild(nodotextoDuracionVuelo);
    textoDuracion.setAttribute("class", "styleTextoDuracion");

    let DuracionVuelo =document.createElement("label");
    contenedor.appendChild(DuracionVuelo);
    let nodoDuracionVuelo = document.createTextNode("1h 20Min");
    DuracionVuelo.appendChild(nodoDuracionVuelo);
    DuracionVuelo.setAttribute("class", "styleDuracion");
    
}

