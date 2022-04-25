let btnAbrirPopup = document.getElementById("btn-abrir-popup");
let overlay = document.getElementById("overlay");
let popup = document.getElementById("popup");
let btnCerrarPopUp = document.getElementById("btn-cerrar-popup");

const lupa = document.getElementById("idLupa");
lupa.addEventListener("click", abrirBusqueda);

const cerrar = document.getElementById("cerrardos");
cerrar.addEventListener("click", cerrarBusqueda);


function buscador(){
    document.getElementById("idHeader").innerHTML="";
    buscadorlupa();
}
function abrirBusqueda(){
    let removeEncabezado = document.getElementById("idHeader");
    removeEncabezado.classList.add("headerInvisible");
    let nuevoHeader = document.getElementById("header2");
    nuevoHeader.classList.remove("header2Invisible");
    nuevoHeader.classList.add("header2visible")
}
function cerrarBusqueda(){
    let removeheader2 = document.getElementById("header2");
    removeheader2.classList.remove("header2visible");
    removeheader2.classList.add("header2Invisible");
    let addHeader1 = document.getElementById("idHeader");
    addHeader1.classList.remove("headerInvisible")
}
function openPopup() {
    let popup = document.getElementById("popup");
    popup.classList.add("open-popup");
}

