function intercambioImagenes(id, ruta){
    document.getElementById(id).src = ruta;
}
function retornoImagen(){
    document.getElementById('imgUno').src = "img/fondolo.jpg" ;

} 
function ocultarImagen(){
  document.getElementById('imgArbol').className = "hidden";
}
function mostrarImgen(){
document.getElementById("imgArbol").className = "img-visible";
}