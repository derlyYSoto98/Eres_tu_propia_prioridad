"use strict"
class Automovil{
    constructor(marca, modelo, anyo, imagen, precio, procedencia,kilometraje){
        this.marca = marca;
        this.modelo = modelo;
        this.anyo = anyo;
        this.imagen=imagen;
        this.precio=precio;
        this.procedencia=procedencia;
        this.kilometraje=kilometraje;

    }
}

let auto1 = new Automovil("Toyota Max", " txl ", 2021, "img/carroToyota.jpeg", 83000000,"Neiva",12354);
let auto2 = new Automovil("Toyota Burbuja ", "4.5", 2018, "img/toyoraBurbuja.jpeg", 58500000,"Tunja", 12300);
let auto3 = new Automovil("Toyota Fortuner ", " 4 x 4 Diesel", 2021, "img/toyotatuner.jpeg", 188000000,"Bogota",9354);
let auto4 = new Automovil("Mazda Cx-5 ", "Grand Tourin 4x4", 2022, "img/mazda4x4.jpeg", 139000000,"Medellin", 2300);
let auto5 = new Automovil("Mazda 3", "Gran Touring Lx", 2021, "img/mazdatourin.jpeg", 100000000,"Cali", 18300);


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
    let txtMarca = document.createTextNode(auto.marca + "" + auto.modelo);
    Etiquetamarca.appendChild(txtMarca);
    Etiquetamarca.setAttribute("class", "style-marca")


    let EtiquetaPrecio = document.createElement("label");
    Contenedor.appendChild(EtiquetaPrecio);
    let precioFormat = new Intl.NumberFormat('es-ES', {}).format(auto.precio);
    let txtPrecio = document.createTextNode("$" + precioFormat);
    EtiquetaPrecio.appendChild(txtPrecio);
    EtiquetaPrecio.setAttribute("class", "style-modelo")


    /* let Etiquetamodelo = document.createElement("label");
    Contenedor.appendChild(Etiquetamodelo);
    let txtModelo = document.createTextNode(auto.modelo);
    Etiquetamodelo.appendChild(txtModelo);
    Etiquetamodelo.setAttribute("class", "style-modelo") */

    let Etiquetanyo = document.createElement("label");
    Contenedor.appendChild(Etiquetanyo);
    let txtYears = document.createTextNode(auto.anyo +" - "+ auto.kilometraje + "Km" +" - "+ auto.procedencia);
    Etiquetanyo.appendChild(txtYears);
    Etiquetanyo.setAttribute("class", "style-anyo")
}


window.addEventListener("keydown", function(event) {
    let busqueda = this.document.getElementById("objetoBusqueda").value;
    if(event.key == "Enter") {
        limpiarVentana();
        if (busqueda == "Toyota" || busqueda == "toyota"){
            mostrarVehiculo(auto1);
            mostrarVehiculo(auto2);
            mostrarVehiculo(auto3);

        }
        else if (busqueda =="Mazda" || busqueda =="mazda") {
            mostrarVehiculo(auto4);
            mostrarVehiculo(auto5);
        }
        else{
            this.alert("No se encuentra resultados que concuerden con la busqueda.")
        }
          
    }
    
});

function limpiarVentana(){
    document.getElementById("main_content").innerHTML="";
}
