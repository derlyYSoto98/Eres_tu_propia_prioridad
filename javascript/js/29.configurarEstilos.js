function fuenteGrande(){
    document.getElementById('parrafoPrincipal').style.fontSize = "2em";
}
function fuenteEspecial(){
    document.getElementById('segundoParrafo').style.fontStyle = "italic";
    document.getElementById('segundoParrafo').style.fontWeight = "900";
    document.getElementById('segundoParrafo').style.fontSize = "1.7em";
    document.getElementById('segundoParrafo').style.color = "red";
}
function imgInvisible(){
    document.getElementById("imgArbol").style.visibility ="hidden";
}
function mostrarImagen(){
    document.getElementById("imgArbol").style.visibility ="visible";
}
function configurarMargenes(){
    document.getElementById("imgLago").style.margin= "30px 0 30px 50px";
}
function restablecerMargenes(){
    document.getElementById("imgLago").style.margin = "0";
}
function flotarDerecha(){
    document.getElementById("imgPerro").style.float = "right";
}
function restablecerPosicion(){
    document.getElementById("imgPerro").style.float = "left";
}