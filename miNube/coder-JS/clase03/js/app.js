/**CLASE 3 */
//CICLOS → FOR WHILE Y DO WHILE

//Ciclo por conteo
//ciclo FOR
/**Caracteristicas
 * Inicializacion
 * Condicion
 * incremento
 */

// for(inicializacion; condicion; incremento){
//     console.log(repetir)
// }

/**
 * OTRA FORMA DE REPRESENTAR EL INCREMENTO
 * i++ → i = i + 1
 * i+=1 → forma alternativa
 * Otras funciones
 * i-=nº → restar 1
 * i*=nº → multiplica por 1 o por el numero puesto
 * i/=nº
 */
// for(let i = 8; i <=10 ; i+=1){
//     console.log("repetir");
//     console.log("El valor de i es " + i)
// }
// console.log("Ya paso el ciclo")

// let numero = Number(prompt("Ingrese la tabla "));
// let fin = Number(prompt("Ingrese la cantidad de numeros a multiplicar"))
// for(let i = 0; i<=fin; i+=1){
//     console.log(numero + " X " + i + " = " + numero*i)
// }

// //parseInt combierte los numeros a enteros

// let num = parseInt(prompt("Ingrese la tabla de "));
// let final = Number(prompt("Ingrese la cantidad de numeros a multiplicar"))
// for(let i = 0; i<=final; i+=1){
//     console.log(num + " X " + i + " = " + num*i)
// }

/**WHILE */
/**Caracteristicas
 * condicion
 * bloque de codigo
 * dentro del bloque de codigos ttiene que haber un incremento
 */
// let i = 0;
// while(i < 10) {
//     console.log("Numero " + i);
//     i+=1;
// }

/**DO WHILE
 * DO → HACE ESTO
 * WHILE → HASTA QUE OCURRA ESTO
 */
// let i = 0; // si let es igual a 0 devuelve Numero 0, Numero 1, etc si let = 20 → ejecuta por lo menos una vez va a devolver Numero 20
// do {
//     console.log("Numero " + i);
//      i+=1;
// } while (i < 10);

/**Ejercicio 
 * WHILE
*/
// let dato = prompt("Ingresar un dato");

// while(dato != "ESC"){
//     console.log("Dato ingresado " + dato);
//     dato = prompt("Ingresar un dato")
// }

/**DO WHILE */
// let dato;
// do{
//      dato = prompt("Ingresar un dato");
// }while(dato != "ESC")

/**SWITCH */
let metodoPago = prompt("Metodo de Pago");
switch(metodoPago){
    case "efectivo":
        console.log("Pagaste con efectivo");
        break;
    case "cheque":
        console.log("Pagaste con cheque");
        break;
    case "credito":
        console.log("Pagaste con tarjeta de credito");
        break;
    case "debito":
        console.log("Pagaste con tarjeta de debito");
        break;
    default:
        console.log("No se acepta " + metodoPago + " como metodo de pago")
}