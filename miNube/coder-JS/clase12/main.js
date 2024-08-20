//OPERADOR ++
/**OPERACION: Aumetar el valor de la variable en 1 */

//OPERADOR TERNARIO
 
// let temperatura = 31 //la condición,

// if (temperatura > 30) { //el caso de ejecución en caso que se cumpla,
//   alert("Día caluroso!")
// } else { //y el caso else si no se cumple
//   alert("Día agradable")
// }

// //otra forma mas simple
// const usuario = {
//     nombre: "Juan",
//     edad: 22
// }

// // declaramos y asignamos condicionalmente
// const permiso = (usuario.edad >= 18) ? true : false

// // mostramos el mensaje
// permiso ? alert("Puede comprar cerveza") : alert("No puede comprar")

/**EJEMPLO EN CLASE */
// const autenticado = true;
//                              //verdadero                        //falso
// let respuesta = autenticado ? "<h1>Bienvenido</h1>" : "<h1>Debe iniciar sesion</h1>"

// document.body.innerHTML = respuesta

// const autenticado = true;
// const puedeComprar = true;

// console.log(autenticado ? 
//     puedeComprar ? 
//     "Si puede comprar" : 
//     "Esta autenticado pero no puede comprar" :
//     "No esta autenticado")

// console.log(autenticado && puedeComprar ? "Esta autenticado y puede comprar" : "No puede comprar")

//OPERADORES LOGICOS ADN
// const carrito = []

// if (carrito.length === 0) {
//   console.log("El carrito está vacío!")
// }

// // con operador AND
// /**Si la condicion es verdadera hace lo que esta dentro del && si es falsa la salta */
// carrito.length === 0 && console.log("El carrito está vacío!")


//OPERADORES LOGOCOS OR

let autenticado = true;
  //autenticado == true
if(autenticado) {
    console.log("si")
}

autenticado = 0
  //cuando evaluamos valores que no sen un booleano podemos obtener una respuesta que sea verdaera o falsa
if(autenticado) {
    console.log("1 evalua a verdadero")

}
//thruty
//falsy
/**
 * false
 * 0
 * ""
 * null
 * underfind
 * NaA
 * 
 */
//si lo que esta a la izquierda es flasy devuelve lo que esta a la derecha
//y si lo que esta a la izquierda es thruty devuelve lo mismo que esta a la izquirda 
console.log( 0 || "Falsy")  // Falsy
console.log( 40 || "Falsy")  // 40
console.log( null || "Falsy")  // Falsy
console.log( undefined || "Falsy")  // Falsy
console.log( "Hola Mundo" || "Falsy")  // Hola Mundo
console.log( "" || "Falsy")  // Falsy
console.log( NaN || "Falsy")  // Falsy
console.log( true || "Falsy")  // true
console.log( false || "Falsy")  // Falsy

//OPERADOR NULLSH
//Solo evaluara como falsos o nulos es null y underfined

console.log( 0 ?? "Nullish")  // 0
console.log( 40 ?? "Nullish")  // 40
console.log( null ?? "Nullish")  // Nullish
console.log( undefined ?? "Nullish")  // Nullish
console.log( "Hola Mundo" ?? "Nullish")  // Hola Mundo
console.log( "" ?? "Nullish")  // ""
console.log( NaN ?? "Nullish")  // NaN
console.log( true ?? "Nullish")  // true
console.log( false ?? "Nullish")  // false