//FUNCIONES EN JS
/**Son bloques que trabajan sobre un scoope interno conocido como scoope local y luego pueden ser llamados en cualquier lugar dle programa*/

function suma (a, b){
    //varias instrucciones
    console.log("resultado : ", a+b);
}
//ejecutar la funcion
suma(4, 5); //puedo usar la funcion cuantas veces que yo quiera
function saludo (){
    console.log("Hola mundo");
}
//ejecutar la funcion
saludo();

//En este caso almacenamos la funcion anonima en una constante
const resta = function(a, b){
    return a - b;
}
console.log(resta(100, 200));

//funciones flecha

const sumaFlecha = (a, b) => {
    //codigo
    return a + b;
}

let resultadoFlecha = sumaFlecha(10,20)
console.log(" el resultado es " + resultadoFlecha);

//las funciones si no tienen el return de manera explicita "return" devuelve undefine