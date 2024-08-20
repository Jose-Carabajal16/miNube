/**FUNCIONES */
function sumar(){
    //cuerpo de la funcion
    console.log(2+2);
}
/**Esta funcion esta definida en el ambito global */
// function(){
//     console.log("Hola !");
// }
//Si quiero utilizar la funcion debo ejecutatla y para eso hay que llamarla
sumar();

//IIFE → AL METERLA DENTRO DEL PARENTESIS LA CONVIERTE EN UNA EXPRESION Y LUEGO LA EJECUTO CON ()
//sIRVE PARA EJECUTAR ALGO EN UN MOMENTO DETERMINADO
 (function(){
     console.log("Hola !");
 })(); 

//fUNCIONES DE EXPRESION
let resta = function(){
         console.log(10-5);
}
/**EJECUTO */
resta();

console.log("--------------------")

//Arrowfunction
let saludo = () => {
    console.log(10-5);
}
saludo();

console.log("--------------------")

//Definicion de funcion por convencion usamos un verbo
/**Para que sirven → un conjunto de instrucciones que hacen una tarea */

function hacerAlgo(){
    console.log("dormir")
}
hacerAlgo();

//PARAMETROS → podemos mandar parametros y realizar acciones dentro de una funcion
console.log("--------------------")

function comer(name, food){
    console.log(name);
    console.log(food);
    console.log(name + " come " + food);
}

let nombre = prompt("Ingresa un nombre");
let comida = prompt("Ingresa una comida")

comer(nombre, comida) 