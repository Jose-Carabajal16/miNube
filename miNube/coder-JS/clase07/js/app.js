//ABSTACCION
/**
 * Resumimos un grupo complejo de instrucciones bajo una palabra clave (función) que sugiere cuál es el problema a resolver por la misma.  

 */
let totales = 0 //acumulando un valor en una variable
for (let i = 1; i <= 10; i++) {
    totales += i
}

console.log(totales)  //  55

//Ahora lo presentamos resumido en una función, y ocupa solo una línea de código:
//console.log(sumarRango(1, 10) ) //  55

//FUNCIONES DE ORDEN SUPERIOR
/**
 * Es aquella que bien retorna una función, o recibe una función por parámetro. 

Este tipo de funciones nos permiten abstraernos sobre acciones y no sólo valores. En esta clase, nos concentramos más en la segunda acepción.
 */
console.log("----------------Funciones de orden--------------------------")
//RETORNAR FUNCIONES
/**
 * En el primer caso, podremos tener una función que retorna una función, lo cual nos permitiría crear funciones con un esquema superior. 
 */
console.log("----------------Funciones como retorno------------")
function mayorQue(n) {
    return (m) => m > n //retorna una función
}

let mayorQueDiez = mayorQue(10) //le estamos pasando el parametro de n

console.log( mayorQueDiez(12) )  //  true
console.log( mayorQueDiez(8) )  //  false

/**
 * En este caso, mayorQue(n) retorna una función que compara un valor contra n y retorna true o false (porque es el resultado de la comparación).


En mayorQueDiez se termina asignando la función que retorna el llamado de mayorQue(10). Al ser llamada con el valor de 10, la asignación se resuelve de la siguiente forma:
let mayorQueDiez = (m) => m > 10

 */
console.log("----------------Ejemplo-Clase---------------------");
//ejemplo en clase
let nombre = prompt("Ingresar un nombre")
const saludar = function (nombre) {
    const responder = "Buenas noches " + nombre;
    return responder
}
console.log(saludar(nombre))

console.log("--------Ejemplo--------------")
//En este ejemplo, según el parámetro op se termina asignando un return de función u otro a las variables declaradas.
function asignarOperacion(op) {
    if (op == "sumar") {
        return (a, b) => a + b
    } else if (op == "restar") {
        return (a, b) => a - b
    }
}

let suma = asignarOperacion("sumar")
let resta = asignarOperacion("restar")

console.log( suma(4, 6) )  //  10
console.log( resta(5, 3) )  //  2


console.log("--------Funciones como parametros--------------")
//RECIBIR FUNCIONES POR PARAMETROS
/**Significa escribir funciones que puedan recibir funciones por parámetro.
Empecemos con un ejemplo: 
 */
function porCadaUno(arr, fn) {
    for (const el of arr) {
        fn(el)
    }
}
//Supongamos que quiero recorrer un array y hacer algo con cada uno de sus elementos.

//Esta función recibe un array por primer parámetro y una función por el segundo. Recorre el array y, por cada elemento, hace un llamado a la función mencionada enviando dicho elemento por parámetro.
const numeros= [1, 2, 3, 4]

porCadaUno(numeros, console.log)
// 1
// 2
// 3
// 4
console.log("------console.log---------")
//CONSOLE.LOG
/**
 * Enviando console.log por parámetro, se ejecuta esa función con cada elemento del array. 
Podemos enviar funciones diferentes en distintos llamados y ejecutar distintas acciones sobre los elementos del array, todo con una misma función.
 */
let total = 0

function acumular(num) {
    total += num  //lo que se hace es sumar la acumulacion de numero
}

porCadaUno(numeros, acumular)
console.log(total) // 10


console.log("----------Ejemplo-Clase--------------");
const crearFuncionSaludo = function(saludo){
    const functionSaludo = function(nombre){
        console.log(saludo + ", " + nombre)
    }
    return functionSaludo;
}
const saludoEspañol = crearFuncionSaludo("Hola");
const saludaIngles = crearFuncionSaludo("Hello");

saludoEspañol("Carlos")
saludaIngles("Charly")

console.log("------arrowfunction---------")
//ARROW FUNCTION
/**Es usual definir la función directamente sobre el parámetro como una función anónima, aprovechando la sintaxis de arrow function. 
Esto permite definir acciones más dinámicas. */
const duplicado = []

porCadaUno(numeros, (el)=> {
    duplicado.push(el * 2)
})

console.log(duplicado) // [2, 4, 6, 8]

//METODOS DE BUSQUEDA Y TRANSFORMACION

//FOREACH

/**
El método forEach() es similar al ejemplo porCadaUno anterior. 
Itera sobre el array y por cada elemento ejecuta la función que enviemos por parámetro, la cual recibe a su vez el elemento del array que se está recorriendo:

 */
console.log("----------FOREACH------------");
const numeros1 = [1, 2, 3, 4, 5, 6]

numeros1.forEach( (num)=> {
    console.log(num)
} )
//1
//2
//3
//4
//5
//6

console.log("----------FIND------------");


//FIND
/**
 * El método find() recibe una función de comparación por parámetro. Captura el elemento que se está recorriendo y retorna true o false según la comparación ejecutada. El método retorna el primer elemento que cumpla con esa condición:
 */

const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
]

const resultado = cursos.find((el) => el.nombre === "ReactJS")
const resultado2 = cursos.find((el) => el.nombre === "DW")

console.log(resultado) // {nombre: 'ReactJS', precio: 22000}
console.log(resultado2) // undefined

console.log("----------FIlter------------");
//FILTER
/**
 * El método filter() recibe, al igual que find(), una función comparadora por parámetro, y retorna un nuevo array con todos los elementos que cumplan esa condición. 
Si no hay coincidencias, retornará un array vacío.

 */
const cursos1 = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
]

const resultado1A = cursos.filter((el) => el.nombre.includes('JS'))
const resultado2A = cursos.filter((el) => el.precio < 14000)

console.log(resultado1A)
/* [
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'Angular', precio: 22000}
] */

console.log(resultado2A) // []

console.log("----------SOME-------");
//SOME
/**
 * El método some() funciona igual que el find() recibiendo una función de búsqueda. En vez de retornar el elemento encontrado, some() retorna true o false según el resultado de la iteración de búsqueda.
 */
console.log( cursos1.some((el) => el.nombre == "Desarrollo Web")) 
// true
console.log( cursos1.some((el) => el.nombre == "VueJS")) 
// false

console.log("----------MAP-------");
//MAP
/**
 * El método map() crea un nuevo array con todos los elementos del original transformados según las operaciones de la función enviada por parámetro. Tiene la misma cantidad de elementos pero los almacenados son el return de la función:
 */
const cursos2 = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
]

const nombres = cursos2.map((el) => el.nombre)
console.log(nombres)
// [ 'Javascript', 'ReactJS', 'AngularJS', 'Desarrollo Web' ]

/*
En el ejemplo, la función retorna la propiedad nombre de cada elemento y eso es lo que se almacena en el nuevo array nombres. Map() se utiliza mucho para transformación de arrays.

Si quisiera aumentar el precio de todos los cursos en este ejemplo, puedo mapear y retornar una copia de los elementos con el precio modificado:
 */
const actualizado = cursos2.map((el) => {
    return {
        nombre: el.nombre,
        precio: el.precio * 1.25
    }
})

console.log(actualizado)
/* [
     { nombre: 'Javascript', precio: 18750 },
     { nombre: 'ReactJS', precio: 27500 },
     { nombre: 'AngularJS', precio: 27500 },
     { nombre: 'Desarrollo Web', precio: 20000 }
] */
console.log("----------Ejemplo-Clase--------------");
 
const catalogo = [
    {nombre: "Heladera",  precio: 20000},
    {nombre: "Microondas", precio: 15000},
    {nombre: "Celular A20", precio: 10000},
];

const productoConImpuesto = catalogo.map(item => (
    {nombre: item.nombre, precio: item.precio, impuesto: item.precio*1.21}
))
console.log(productoConImpuesto)
//REDUCE
/**
 * El método reduce() nos permite obtener un único valor tras iterar sobre el array. Funciona como un método que resume el array a un único valor de retorno. 

Ejemplos de aplicación:
Cuando queremos acumular la suma de alguna propiedad de los elementos,
O cuando deseamos obtener algún resultado general sobre todo el array. 

A diferencia de los métodos anteriores, el método reduce recibe dos parámetros. 

1) El primero es la función que ordena qué queremos resumir del array. Recibe un parámetro que funciona como acumulador, y el elemento del array que iteramos.

2) El segundo es el valor inicial del acumulador. 

 */

const numeros2 = [1, 2, 3, 4, 5, 6]
const total2 = numeros2.reduce((acumulador, elemento) => acumulador + elemento, 0)

console.log(total2) // 21

//En este ejemplo, en el acumulador sumamos cada elemento del array y al terminar la iteración nos devuelve ese resultado. El segundo parámetro del reduce, que aquí se ve como 0, es el valor inicial del acumulador.

//Con este caso podría, pensando por ejemplo en un simulacro de compra, sumar el precio de todos los productos elegidos:

const numeros3 = [1, 2, 3, 4, 5, 6]
const total3 = numeros3.reduce((acumulador, elemento) => acumulador + elemento, 0)

console.log(total3) // 21

//SORT
/**
 * El método sort() nos permite reordenar un array según un criterio que definamos. Recibe una función de comparación por parámetro que, a la vez, recibe dos elementos del array. La función retorna un valor numérico (1, -1, 0) que indica qué elemento se posiciona antes o después.

⚠ CUIDADO ⚠
Este método es destructivo, es decir, modifica el array sobre el cual se llama. 

Para ordenar números, basta con restar uno al otro, y el orden indica si será ordenado de forma ascendente o descendente
 */

const numeros4 = [ 40, 1, 5, 200 ];
numeros4.sort((a, b) => a - b);  // [ 1, 5, 40, 200 ]
numeros4.sort((a, b) => b - a);  // [ 200, 40, 5, 1 ]

//Para ordenar un array por algún string, debemos definir una función comparadora que retorne un valor numérico de referencia, según queramos el orden ascendente o descendente:

const items = [
    { name: 'Pikachu', price: 21 },
    { name: 'Charmander', price: 37 },
    { name: 'Pidgey', price: 45 },
    { name: 'Squirtle', price: 60 }
  ]
items.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    // a es igual a b
    return 0;
})
        