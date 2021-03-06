var  arreglo = [];
var j = 0;
var mayor = 0;
var menor = 0;

var n_fin = prompt("Digte un numero de 1 a 8"); 

for (var i = 0; i < 8; i++) 
{
    j = j + 1;
    var n_ini = prompt("Digte de " + j + " a 8 numeros"); 
     
    var peso = parseFloat(n_ini);
        n= i;
        /* console.log(n); */
        /* console.log(peso);    */
        arreglo.push(peso);
}

console.log("El rango de busqueda es de " + n_fin);

j = 0;
arreglo.forEach(function(elemento, indice, array)
     {

        if (indice  < n_fin){
            console.log(elemento);
            if (indice  = 0) {
                mayor = elemento;
                /* console.log(" " + elemento, indice) */
              }else
              {
                 menor = elemento;
                 if (menor > mayor) {
                
                    /* console.log(" > " + elemento, indice) */
                    mayor = menor;
                 }
              }
 
        }

     }
     )
     console.log(" Registro mayor  " + mayor)




