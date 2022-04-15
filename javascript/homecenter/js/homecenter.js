"use strict"
let div5 = document.getElementById("div5");

let botonMostrarDiv = document.getElementById("boton");
let botonCerrar= document.getElementById("botonCerrar");

botonMostrarDiv.addEventListener("click", mostrarDiv);
botonCerrar.addEventListener("click", ocultarDiv);

function mostrarDiv(){
    div5.classList.remove("transition5");
    div5.classList.add("transition6");
    botonMostrarDiv.classList.add("botonPoputInvisible");
    botonCerrar.classList.remove("botonCerrar");
    botonCerrar.classList.add("botonCerrarVisible");
}

function ocultarDiv(){
    div5.classList.add("transition5");
    div5.classList.remove("transition6");
    botonMostrarDiv.classList.remove("botonPoputInvisible");
    botonCerrar.classList.add("botonCerrar");
    botonCerrar.classList.remove("botonCerrarVisible");
}