
// /**CLASE 02*/
// // if → siempre evalua a verdadero no evalua a falso

// /**CONDICIONALES SIMPPLES */
// if (true) {
//     console.log("Esto se va a ver")
// };

// if (false) { /**por lo general a estas afirmaciones se le agraga ! if (!falase) → se lo lee "si esto no es falso"  */
//     console.log("Esto no se va a ver")
// }

// let esCasado = true;
// console.log(esCasado);
// console.log(typeof esCasado); /**typeof es un operador JavaScript que al ser llamado sobre una variable, devuelve el tipo de dato que dicha variable contiene. */

// /**Operadores de comparacion → siempre que encontramos operadores de comparacion el resultado sera un booleano
//  * == → cuando quiero saber si algo es igual
//  * === → estrictamente igual, compara no solo el valor si no tambien el tipo de dato
//  * !=== → estrictamente diferente, compara no solo el valor si no el tipo de dato 
//  * != → cuando quiero saber si algo es diferente
//  * < menor
//  * > mayor
//  * <= menor o igual
//  * >= mayor o igual
// */
// //CONDICIONAL SIMPLE → en el caso de que se cumpla la condicion lo muestra en caso contrario lo salta y no lo muestra
// let esMayor = true; 
// if(esMayor = true) { // el signo = es el signo de asignacion, para comparar valores se necesita operadores decomparacion
//     console.log("Puede beber")
// }

// //cuando yo hago una comparacion el resultado sera un booleano

// console.log("-----comparaciones-------")
// let resultado = 0 == "0";
// console.log(resultado);
// console.log(typeof resultado);
// resultado = 0 === "0"; //ahora no son estroctamente iguales 
// console.log(resultado);
// console.log(typeof resultado);


// console.log(10>11) //False
// console.log(10<11) //true
// console.log(10>10) //False
// console.log(10>=10) //true

// console.log(10!= "10") //False
// console.log(10!==11) //true

// const puntaje = "1000";
// if(puntaje == 1000){
//     console.log("si es igual")
// } else {
//     console.log("No es igual")
// }

// /**  */
// let rol = prompt("Ingresar rol")

// if(rol === "Admin"){
//     console.log("El usuario puede editar y eliminar y leer toda la info")
// }else if(rol === "Editor") {
//     console.log("El usuario puede editar")
// } else {
//     console.log("El usuario solo puede leer")
// }

/**OPERADORES LOGICOS*/

/**
 * || or→ Suma logica uno de las dos condiciones se tiene que cumplir para que el resultado sea verdadero
 * && → multiplicaicon logica las dos condiciones deben cumplirse para que el resultado sea verdadero
 * 
 */

/**  && → AND
 * A + B = RDO
 * True  true   true
 * true  false  false
 * false true   false 
 * false false  false*/ 
// const usuario = false;
// const puedePagar = true;

// if(usuario  && puedePagar) {
//     alertg("Tu pedido se realizo con exito")
//     // Este resultado es false entonces no entra
// } else {
//     console.log("Hubo un error con tu pago")
// }
/**  || → OR
 * A + B = RDO
 * True  true   true
 * true  false  True
 * false true   true 
 * false false  false*/ 
// const usuario = false;
// const identificado = true;

// if(usuario  || identificado) {
//     alert("Puede comprar")
//     // Este resultado es verdadero
// } else {
//     console.log("Necesitamos identificarte")
// }

// /**EJERCICIO */
// let efectivo = 3000;
// let credito = 4000;

// let disponible = efectivo + credito;
// console.log(disponible);
// let totalCompra = 7000;

// if(efectivo >= totalCompra || credito > totalCompra){
//     console.log("Puede pagar con efectivo o tarjeta")
//     // el resultado de la primera operacion es false
//     //el resultado de la segunda es fañse
// }else if(disponible>= totalCompra){
//     console.log("Puedo pagar combinando efectivi y tarjeta")

// }else {
//     console.log("No puedo pagar")
// }