//EL OBJETO MATH
/**
 * Javascript provee el objeto Math que funciona como un contenedor de herramientas y métodos para realizar operaciones matemáticas.

El objeto Math contiene una serie de métodos que nos permiten realizar algunas operaciones matemáticas más complejas. 

*/  
console.log("-----propiedades-------");
//Propiedades
//Se puede acceder a algunas constantes matemáticas a través del objeto Math, como pueden ser el número PI o la constante de Euler:

console.log( Math.E ) // 2.718281828459045
console.log( Math.PI ) // 3.141592653589793

//Métodos del objeto Math
console.log("-----Min y Max-------");
/**
 * Min & Max
Los métodos de Math.min() y Math.max() reciben una serie de argumentos numéricos y devuelven aquel de valor máximo o mínimo, según corresponda:
 */
console.log( Math.max(55, 13, 0, -25, 93, 4) ) // 93
console.log( Math.min(55, 13, 0, -25, 93, 4) ) // -25

/**
 * También se pueden referenciar los valores de infinito positivo o negativo a través de la variable global Infinity, de tipo number:
 */

console.log( Math.max(55, Infinity, 0, -25, 93, 4) ) // Infinity
console.log( Math.min(55, 13, 0, -Infinity, 93, 4) ) // -Infinity

console.log("-----Ceil, floor y round-------");
/**
 * Ceil, Floor & Round
 * Sirven para redondear un valor numérico a un número entero cercano:
 */
const pi = Math.PI // 3.141592653589793
console.log("-----Ceil-------");
// CEIL: devuelve el entero mayor o igual más próximo
console.log( Math.ceil(pi) ) // 4

console.log("-----floor-------");
// FLOOR: devuelve el entero más cercano redondeado hacia abajo
console.log( Math.floor(pi) ) // 3

console.log("-----Round-------");
// ROUND: retorna el valor de un número redondeado al entero más cercano
console.log( Math.round(pi) ) // 3
//PARCEINT → devuelve la parte entera 
console.log(parseInt(pi)); //3

console.log("-----SquareRoot-------");
/**
 * Square Root
 * El método Math.sqrt() retorna la raíz cuadrada de un número. Si se le envía un número negativo, el método retorna NaN.
 */
Math.sqrt(9) // 3
Math.sqrt(2) // 1.414213562373095
Math.sqrt(1)  // 1
Math.sqrt(-1) // NaN

console.log("-----Random-------");
/**Random
El método Math.random() genera un número pseudo-aleatorio entre 0 y 1, siendo el 0 límite inclusivo y el 1 exclusivo.
*/
console.log( Math.random() ) // 0.6609867980868442
console.log( Math.random() ) // 0.09291446900104305
console.log( Math.random() ) // 0.6597817047013095

/**
 * Para generar números aleatorios dentro de un rango deseado, distinto de 0-1, podemos multiplicar su resultado por el rango esperado. A la vez podemos sumar el límite inferior si lo necesitamos:
 */
// números entre 0 y 10
console.log( Math.random() * 10 )
// números entre 0 y 50
console.log( Math.random() * 50)
// números entre 20 y 50
console.log( Math.random() * 30 + 20 )

/**
 * En el último ejemplo quiero generar números entre 20 y 50. Por eso, el rango de números es de 30 a partir del número 20 (límite inferior adicionado). Pero todos los números siguen conteniendo una larga serie de decimales.

Esto se suele combinar con las funciones de redondeo para obtener números enteros aleatoriamente, que suelen ser de uso más común.

 */
const generadorNumero = () => {
    return Math.round( Math.random() * 100 )
}

console.log( generadorNumero() )

/**
 * Al usar Math.round, esta función retornará números aleatorios en el rango de 0-100 inclusive. Si usara Math.ceil los números irían de 1 a 100, ya que siempre redondeará hacia arriba; y si usa Math.floor el rango sería de 0 a 99.
 */


console.log("-----Date-------");
//La clase Date

/**
 * Date
Instanciar un objeto Date nos genera la fecha y tiempo actual:

 */
console.log( new Date() )
// Fri Dec 17 2021 11:35:08 GMT-0300 (hora estándar de Argentina)

console.log("-----Constructor-------");
//Constructor

/**
 * El constructor de la clase Date nos permite crear objetos date con fechas diferentes. Puede recibir parámetros en el orden año, mes, día, hora, minutos, segundos, milisegundos (todos tipo number).

 */

/**
 * La convención con la que trabaja Javascript para construir fechas cuenta los meses a partir del 0 (0 = enero, 11 = diciembre) y los días a partir del 1:

 */

console.log(new Date(2020, 1, 15))
// Sat Feb 15 2020 00:00:00 GMT-0300 (hora estándar de Argentina)

const casiNavidad = new Date(2021, 11, 25, 23, 59, 59)
console.log(casiNavidad)
// Sat Dec 25 2021 23:59:59 GMT-0300 (hora estándar de Argentina)

/**
 * El constructor de la clase Date nos permite crear objetos date con fechas diferentes. Puede recibir parámetros en el orden año, mes, día, hora, minutos, segundos, milisegundos (todos tipo number).
 */

const casiNavidad2 = new Date("December 25, 2021 23:59:59")
console.log(casiNavidad2)
// Sat Dec 25 2021 23:59:59 GMT-0300 (hora estándar de Argentina)

console.log("-----VSingular-------");
//Obtener un valor singular de la fecha

/**
 * Valor singular
Instanciado un objeto Date, podemos aplicar distintos métodos que nos evuelven determinados valores de la misma. 
1)  getMonth()
nos retornará el number que representa el mes (entre 0 y 11).
2) getFullYear()
nos devolverá el number que representa el año creado
3) getDay()
nos retornará el number que representa el día creado (1 = lunes, 7 = domingo)

*/

const hoy = new Date("December 17, 2021")

console.log( hoy.toDateString() ) // Fri Dec 17 2021
console.log( hoy.toLocaleString() ) // 17/12/2021 00:00:00
console.log( hoy.toLocaleDateString() ) // 17/12/2021
console.log( hoy.toTimeString() ) // 00:00:00 GMT-0300 (hora estándar de Argentina)


console.log("-----Presentacion-------");
//Presentación

/**
 * La clase también tiene distintos métodos que presentan la fecha con distintos formatos posibles de tipo string. 

 */
const hoy1 = new Date("December 17, 2021")

console.log(hoy1.getFullYear()) // 2021
console.log(hoy1.getMonth()) // 11  (diciembre)
console.log(hoy1.getDay()) // 5  (viernes)

//Diferencias entre fechas
/**
 * Algunos puntos importantes…
Los resultados de las diferencias entre fechas se generan en milisegundos. 

Si quisiera calcular la diferencia de días entre dos fechas habría que generar cálculos adicionales sobre esta diferencia en milisegundos. 

Por suerte, existen librerías que solucionan estos problemas de forma eficiente y rápida, pero las trabajaremos en clases posteriores.

 */

//Ejemplos de diferencias entre fechas

const navidad = new Date("December 25, 2021")
const hoy2 = new Date("December 17, 2021")

console.log( navidad - hoy2 ) // 691200000

const milisegundosPorDia = 86400000

console.log( (navidad - hoy2 ) / milisegundosPorDia) // 8

//Ejempplo
const inicio = new Date()

for (let i = 0; i < 1000; i++) {
    console.log("haciendo tiempo")
}

const final = new Date()

console.log("El proceso tardó: " + (final - inicio) + " milisegundos")
// El proceso tardó: 396 milisegundos
