"use strict"
function validar() {
    let crearParrafo = document.createElement("p");
    let contenedor = document.getElementById("main-content");
    contenedor.appendChild(crearParrafo);
    let nodetoParrafo = document.createTextNode("Hola, soy un nodo");
    crearParrafo.appendChild(nodetoParrafo);
}

function crearTabla(){
   /*  Crea la tabla */
    let crearTabla = document.createElement("table");
    let contenedor = document.getElementById("main-tabla");
    contenedor.appendChild(crearTabla);
/* crea la promera tr */
    let crearRow = document.createElement("tr");
    crearTabla.appendChild(crearRow)

    let contenido1 = document.createElement("td");
    crearRow.appendChild(contenido1);
    let info1 = document.createTextNode("Nombre: Derly");
    contenido1.appendChild(info1);

/* Crea el segundo tr */

    let crearRow1 = document.createElement("tr");
    crearTabla.appendChild(crearRow1)


    let crearDate1 = document.createElement("td");
    crearRow1.appendChild(crearDate1);
    let dato1 = document.createTextNode("Apellido: Soto");
    crearDate1.appendChild(dato1);

}