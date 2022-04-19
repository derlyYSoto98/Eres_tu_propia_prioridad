let btnAbrirPopup = document.getElementById("btn-abrir-popup");
let overlay = document.getElementById("overlay");
let popup = document.getElementById("popup");
let btnCerrarPopUp = document.getElementById("btn-cerrar-popup");

const lupa = document.getElementById("idLupa");
lupa.addEventListener("click", abrirBusqueda);

const cerrar = document.getElementById("cerrardos");
lupa.addEventListener("click", cerrarBusqueda);


function abrirBusqueda(){
    let removerEncabezado = document.getElementById("idHeader");
    removerEncabezado.classList.add("header2Invisible");
    let nuevoHeader = document.getElementById("header2");
    nuevoHeader.classList.remove("header2Invisible");
    nuevoHeader.classList.add("header2visible");

}

/* function cerrarBusqueda(){
    let removeHeader2 = document.getElementById("header2");
    removeHeader2.classList.remove("header2visible");
    removeHeader2.classList.add("header2Invisible");
    let addHeader1 = document.getElementById("idHeader");
    addHeader1 =classList.remove("headerInvisible");
}
 */
function openPopup() {
    let popup = document.getElementById("popup");
    popup.classList.add("open-popup");
}

