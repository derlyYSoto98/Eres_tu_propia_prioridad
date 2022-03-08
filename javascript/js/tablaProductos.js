"use strict"
let nodoTabla = undefined;
function cargarProducto(){
    if (validarFormulario()){
        if (!document.getElementById("tablaProductos")) {
        crearEncabezado();
      }  
        registrarProducto();
    }    
}

function crearEncabezado(){
    nodoTabla = document.createElement("table");
    let contenedorTabla = document.getElementById("table_js");
    contenedorTabla.appendChild(nodoTabla);
    nodoTabla.setAttribute("class", "table-style");
    nodoTabla.setAttribute("id", "tablaProductos");

    let filaEncabezado = document.createElement("tr");
    nodoTabla.appendChild(filaEncabezado);

    let crearDateCodigo = document.createElement("th");
    filaEncabezado.appendChild(crearDateCodigo);
    let textoNodoCodigo = document.createTextNode("Código del producto");
    crearDateCodigo.appendChild(textoNodoCodigo);

    let crearDateDescripcion = document.createElement("th");
    filaEncabezado.appendChild(crearDateDescripcion);
    let textoNodoDescripcion = document.createTextNode("Descripción");
    crearDateDescripcion.appendChild(textoNodoDescripcion);

    let crearDateValor = document.createElement("th");
    filaEncabezado.appendChild(crearDateValor);
    let textoNodoValor = document.createTextNode("Valor unitario");
    crearDateValor.appendChild(textoNodoValor);

    let crearDatestock = document.createElement("th");
    filaEncabezado.appendChild(crearDatestock);
    let textoNodoStock = document.createTextNode("Unidades en Stock");
    crearDatestock.appendChild(textoNodoStock);  
}

function registrarProducto() {
    let inputCodigo = document.getElementById("codigo").value.trim();
    let trProducto = document.createElement("tr");
    nodoTabla.appendChild(trProducto);
    let tdCodigo = document.createElement("td");
    trProducto.appendChild(tdCodigo);
    let txtCodigo= document.createTextNode(inputCodigo);
    tdCodigo.appendChild(txtCodigo);

    let inputDescripcion = document.getElementById("descripcion").value;
    let trDescirpcion= document.createElement("tr");
    nodoTabla.appendChild(trDescirpcion);
    let tdDescripcion = document.createElement("td");
    trProducto.appendChild(tdDescripcion);
    let texDescripcion = document.createTextNode(inputDescripcion);
    tdDescripcion.appendChild(texDescripcion);

    limpiarFormulario();

}
function limpiarFormulario() {
    document.getElementById("codigo").innerHTML="";
}

function validarFormulario(){
    if (document.getElementById("codigo").value.trim()=="") {
        alert("Por favor, ingrese el código del producto");
        document.getElementById("codigo").focus();
        return false;
    }


    return true;

}