//EJEMPLO BUSCAR PRODUCTO SI EXISTE EN EL CARRITO 

//LACOCINA DEL CODIGO → YOUTUBE
//HOLA MUNDO REDUCE → YOUTUBE

//REDUCE → sirve como acumulador en este caso para sumar el total de los precios del carrito
const carrito = [
    {nombre: "Zapatos", precio: 500},
    {nombre: "Camisa", precio: 700},
    {nombre: "Chomba", precio: 300},
    {nombre: "Remera", precio: 200},
    {nombre: "Musculosa", precio: 500},
    {nombre: "Medias", precio: 50},
    {nombre: "Gorra", precio: 300},
    {nombre: "Campera", precio:800},
]
//el {total → en un principio arranca de 0 y a eso le vamos a sumar el precio del producto item.precio} → las llaves no van porque si no debe haber un return
let resultado = carrito.reduce((total, item) => total + item.precio , 0 ) //el reduce recibe dos parametro, el primero es una funcion y el segundo sera desde donde se empieza a contar por ejemplo desde 0
//La otra particularidad es que la funcion que recibe como primer parametro recibe 2 parametros, el 1º sera el acumulador donde se guardara el total, el 2º es el elemento, es decir el elemento del carrito(item engloba todo el array con sus propiedades)
console.log(resultado);

//FOREACH

let total = 0; //empieza acumulando desde el 0 y sumando cada precio
carrito.forEach(item => total += item.precio);
console.log(total);


//FILTER
const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
]
let res = cursos.filter( item => item.precio >= 16000)
let res1 = cursos.filter (item => item.nombre.includes("JS")) /**
En el código que proporcionaste, estás utilizando el método `filter()` en el array `cursos`. Permíteme explicarte línea por línea:

1. `const cursos = [...]`: Aquí estás creando un array llamado `cursos` que contiene objetos. Cada objeto representa un curso con dos propiedades: `nombre` y `precio`.

2. `let res1 = cursos.filter(item => item.nombre.includes("JS"))`: Aquí estás utilizando el método `filter()` en el array `cursos`. Este método crea un nuevo array con todos los elementos que cumplan cierta condición. 

   - `item => item.nombre.includes("JS")`: Este es el argumento de la función que se pasa al método `filter()`. Aquí se utiliza una función de flecha (arrow function) que toma un parámetro `item`, que representa cada elemento del array `cursos`. La función verifica si el nombre del curso (accesible mediante `item.nombre`) incluye la cadena `"JS"` utilizando el método `includes()`. Si la condición se cumple para un elemento, ese elemento se incluye en el nuevo array resultante.

   - `res1`: La variable `res1` ahora contiene el nuevo array que resulta de filtrar los cursos que contienen la cadena `"JS"` en su nombre.

Entonces, después de ejecutar esta línea de código, `res1` contendrá los cursos cuyos nombres incluyan la cadena `"JS"`. En este caso, los cursos que cumplen con esta condición son `'Javascript'`, `'ReactJS'` y `'AngularJS'`. */

console.log(res)
/* [
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'Angular', precio: 22000}
    {nombre: 'Desarrollo Web', precio: 16000}
] */
console.log(res1) //Entonces, después de ejecutar esta línea de código, `res1` contendrá los cursos cuyos nombres incluyan la cadena `"JS"`. En este caso, los cursos que cumplen con esta condición son , `'ReactJS'` y `'AngularJS'`. 


//OTRAS MANERAS DE UTILIZAR EL FILTER

const carrito2 = [
    {id: 1, nombre: "Zapatos", precio: 500},
    {id: 2, nombre: "Camisa", precio: 700},
    {id: 3, nombre: "Chomba", precio: 300},
    {id: 4, nombre: "Remera", precio: 200},
    {id: 5, nombre: "Musculosa", precio: 500},
    {id: 6, nombre: "Medias", precio: 50},
    {id: 7, nombre: "Gorra", precio: 300},
    {id: 8, nombre: "Campera", precio:800},
]

let nuevoCarrito = carrito2.filter(item => item.id !== 1)
console.log(nuevoCarrito);
//Devuelve un nuevo array y borra el primero
/**
 *  {id: 2, nombre: "Camisa", precio: 700},
    {id: 3, nombre: "Chomba", precio: 300},
    {id: 4, nombre: "Remera", precio: 200},
    {id: 5, nombre: "Musculosa", precio: 500},
    {id: 6, nombre: "Medias", precio: 50},
    {id: 7, nombre: "Gorra", precio: 300},
    {id: 8, nombre: "Campera", precio:800},
 */

    