/** */

let numeros = [1, 2, 3, 4, 5]
let dobles = numeros.map(edelArray => edelArray * 2)
console.log(dobles)
console.table({numeros, dobles})

// let boton1 = document.getElementById("btn1")
// boton1.addEventListener("click", (e) =>{
//     e.preventDefault()
//     //etc
// })

//ejemplo
function suma(a, b, callback) {
    let resultado = a + b;
    callback(resultado);
}

// Función callback que se pasará como argumento
function mostrarResultado(resultado) {
    console.log("El resultado es:", resultado);
}

// Llamamos a la función suma y le pasamos la función mostrarResultado como callback
suma(5, 7, mostrarResultado);
