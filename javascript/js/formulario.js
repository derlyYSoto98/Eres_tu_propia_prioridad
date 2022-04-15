
 function validacion(){
     var forvalido = true;
     var nombre = document.getElementById("nom").value;
     var apellido = document.getElementById("ape").value;
     var cedula = document.getElementById("ced").value;
     var fecha = document.getElementById("fec").value;
     var telefono = document.getElementById("mov").value;
     var contra = document.getElementById("cont").value;
     var contrados = document.getElementById("contra").value;
     var gener = document.getElementsByName("genero");
     var departa = document.getElementById("depar").selectedIndex;
     var municipio = document.getElementById("muni").value;
     var cate = document.getElementsByName("categoria").value;
     
    if (nombre == null || nombre.length == 0){
        alert("ALERTA!! El nombre no puede estar vacio");
        forvalido = false;
    }
    if (apellido == null || apellido.length == 0){
        alert("ALERTA!! El apellido no puede estar vacio");
        forvalido = false;
    }
    if (cedula == null || cedula.length == 0){
        alert("ALERTA!! La cedula no puede estar vacia");
        forvalido = false;
    }
    if (fecha == null || fecha == 0){
        alert("ALERTA!! La fecha no puede estar vacia");
        forvalido = false;
    }
    if (telefono == null || telefono == 0){
        alert("ALERTA!! El telefono no puede estar vacio");
        forvalido = false;
    }
    if (contra == null || contra.length == 0){
        alert("ALERTA!! La contraseña no puede estar vacia");
        forvalido = false;
    }
    if (contrados == null || contrados.length == 0){
        alert("ALERTA!! La confirmacion de  contraseña no puede estar vacia");
        forvalido = false;
    }
     for (let index = 0; index < gener.length; index++) {
         if(gener[index].checked){
            seleccionado = true;
         }    
     }
     if (!seleccionado){
        alert("ALERTA!! No has seleccionado ningun genero.");
        forvalido = false;
     }

    if (departa == null || departa == 0){
        alert("ALERTA!! No a elegido un departamento.");
        forvalido = false;
    }
    if (municipio == null || municipio.length == 0){
        alert("ALERTA!! Falta el municipio o barrio");
        forvalido = false;
    }

   /* for (let i = 0; i < 4; i++) {
         if(cate[i].checked){
            seleccionador = true;
         }    
     }
     if (!seleccionador){
        alert("ALERTA!! No has marcado la categoria");
        forvalido = false;
    } */
    

     return forvalido;
 }

    
    
    