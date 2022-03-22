"use strict"
class Automovil{
    constructor(marca, modelo, anyo, imagen){
        this.marca = marca;
        this.modelo = modelo;
        this.anyo = anyo;
        this.imagen=imagen;

    }
}

let auto1 = new Automovil("Toyota ", " txl ", 2021, "img/carroToyota.jpeg");
let auto2 = new Automovil("Mazda ", "3 Touring", 2018, "img/carroToyota.jpeg");

function mostrarVehiculo(auto){
    // alert(auto.marca +" " + auto.modelo);
    let Contenedor = document.createElement("div");
    let contenMain = document.getElementById("main_content");
    contenMain.appendChild(Contenedor);
    Contenedor.setAttribute("class", "style_contenImg");

    let imagenCarro = document.createElement("img");
    Contenedor.appendChild(imagenCarro);
    imagenCarro.setAttribute("src", auto.imagen);
    imagenCarro.setAttribute("class", "styleImagen")

    let Etiquetamarca = document.createElement("label");
    Contenedor.appendChild(Etiquetamarca);
    let txtMarca = document.createTextNode(auto.marca);
    Etiquetamarca.appendChild(txtMarca);
    Etiquetamarca.setAttribute("class", "style-marca")

    let Etiquetamodelo = document.createElement("label");
    Contenedor.appendChild(Etiquetamodelo);
    let txtModelo = document.createTextNode(auto.modelo);
    Etiquetamodelo.appendChild(txtModelo);
    Etiquetamodelo.setAttribute("class", "style-modelo")

   let Etiquetanyo = document.createElement("label");
    Contenedor.appendChild(Etiquetanyo);
    let txtYears = document.createTextNode(auto.anyo);
    Etiquetanyo.appendChild(txtYears);
    Etiquetanyo.setAttribute("class", "style-anyo")
}


window.addEventListener("keydown", function(event) {
    if(event.key == "Enter") {
        mostrarVehiculo(auto1);
        mostrarVehiculo(auto2);
    }
    
});
