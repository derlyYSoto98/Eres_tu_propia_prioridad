function parrafoEspecial(){
   let parrafos =  document.getElementsByTagName("p");
   parrafos[0].style.fontFamily = "verdana, genefa, sans-serife";
   parrafos[2].style.fontFamily = "verdana, genefa, sans-serife";
}
function llamarColor(){
    let contenedores = document.getElementsByTagName("div");
    for (let i = 0; i < contenedores.length; i++) {
        contenedores[i].style.background ="darkcyan";
        
    }
}