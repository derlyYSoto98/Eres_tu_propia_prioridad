function expandirTexto(){
    //alert('si estoy funcionando.');
    let textoCompleto ="En una entrevista con Joanna Stern durante un evento del Wall Street Journal que reúne a alguno de los directivos más influyentes del mundo, Elon Musk aseguró que considera que “no hay suficiente gente” y que hay que tener más hijos si no se quiere que la civilización se desaparezca. <br>" + "“Creo que uno de los mayores riesgos para la civilización es la baja tasa de natalidad y el rápido descenso de la misma. Sin embargo, muchos, incluso personas inteligentes, creen que hay demasiada gente en el mundo y que la población está creciendo sin control. Es completamente lo contrario. Por favor, miren los números: si la gente no tiene más hijos, la civilización se va a desmoronar, recuerden mis palabras’', dijo Musk." + " Según el magnate, este tipo de tecnología podría reemplazar los trabajos repetitivos y aburridos que realizan los humanos. <br>" + "En el mes de agosto, la compañía anunció que trabajaría en un robot que haría uso de la inteligencia artificial, la cual ya están usando en los carros, con el fin de que sea capaz de cumplir con algunas labores sin necesidad de moverse a más de 5 kilómetros por hora. <br>  <a href='javascript:void(0)' onclick='verMenos();'><i class='fas fa-solid fas fa-angle-up'></i> Leer menos..</a>";

    document.getElementById("texto-configurado").innerHTML = textoCompleto;
}

function verMenos(){
    let menosTexto = "En una entrevista con Joanna Stern durante un evento del Wall Street Journal que reúne a alguno de los directivos más influyentes del mundo, Elon Musk aseguró que considera que “no hay suficiente gente” y que hay que tener más hijos si no se quiere que la civilización se desaparezca"+ "<a href='javascript:void(0)' onclick='expandirTexto();'> Leer más..</a>";

    document.getElementById("texto-configurado").innerHTML = menosTexto;
    
}