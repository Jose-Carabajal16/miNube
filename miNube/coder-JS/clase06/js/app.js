//ARRAY
/**
 * Se lo identifca con []
 */

// Declaraciòn de array vacío
const arrayA = [];
// Declaracion de array con nùmeros
const arrayB = [1,2];
// Declaracion de array con strings
const arrayC = ["C1","C2","C3"];
// Declaracion de array con booleanos
const arrayD = [true,false,true,false];
// Declaracion de array mixto
const arrayE = [1,false,"C4"];

console.log(arrayB)
console.log(typeof arrayB)
console.log("--------------------------------")

//ACCESO AL ARRAY 
/**
 * Los elementos dentro de un array tienen un índice que determina su posición en el mismo. 
Así, es posible acceder a los elementos dentro de un array a través de su posición:
 */
const  numeros = [1,2,3,4,5];
console.log( numeros[0] ) // 1; 
console.log( numeros[3] ) // 4; 
let resultado  = numeros[1] + numeros[2] 
console.log( resultado  ) // 5;
console.log(numeros.length)

console.log("--------------------------------")
/**Recorrido del array
 * Decimos que estamos recorriendo un Array cuando empleamos un bucle para acceder a cada elemento por separado.
Los Array en JavaScript son objetos iterables, lo que permite usar distintas estructuras para iterar sobre ellos.
 */

for (let index = 0; index < 5; index++) {
    console.log(numeros[index]);
}
console.log("--------------------------------")
/** Métodos y propiedades
 * Length
Al igual que en un String, la propiedad length nos sirve para obtener el largo de un Array, es decir, para identificar cuántos elementos tiene.
 */

const miArray = ["marca", 3 ,"palabra"];
console.log( miArray.length ); //imprime 3

/**Es común utilizarlo para definir el límite de una iteración sobre un array, ya que la propiedad length me permite saber explícitamente la longitud del mismo: */

const ensalada = ["tomate", "lechuga", "papa", "zanahoria", "pepino", "cebolla", "morron", "zuccini"]

for (let i= 0; i < ensalada.length; i++) {
    console.log(ensalada[i]);
}

console.log("--------------------------------")
/**
 * Agregar elementos
 * Para sumar un elemento a un Array ya existente, se utiliza el método push, pasando como parámetro el valor (o variable) a agregar.
 */

const nombre = ["josefina", 3, "mateo"]
nombre.push('sofia') //agrega un elemento en lista, y lo agrega al final

console.log(nombre.length) // ⇒ 4
for (let i= 0; i < nombre.length;  i+=1){
    console.log(nombre[i]) // ⇒ "josefina", 3, "mateo", "sofia"
}
console.log(nombre)
//["josefina", 3, "mateo", "sofia"]

/**El método push () agrega elementos al final del array. Si queremos agregar al inicio del array, utilizamos el método unshift() de forma similar: */
console.log("--------------------------------")
const meses = ["febrero", "marzo", "abril"]
meses.unshift('enero') //agrega un elemento en lista, y lo agrega al final

console.log(meses.length) // ⇒ 4
for (let i= 0; i < meses.length;  i+=1){
    console.log(meses[i]) // ⇒ enero febrero marzo abril
}
console.log(meses)

console.log("--------------------------------")

/**Quitar elementos

De forma inversa, existen métodos para eliminar elementos del array.

Si queremos eliminar el primer elemento del array utilizamos el método shift(); y si queremos eliminar el último elemento, el método pop().
 */
//POP Y SHIFT
// const nombres = ["Luis", "Ana", "Julia", "Juan"]

// nombres.pop() //elimina Juan
// console.log(nombres) // ["Luis", "Ana", "Julia"]
// for (let i= 0; i < nombres.length;  i+=1){
//     console.log(nombres[i]) // ⇒ luis, ana
// }
// nombres.shift()
// console.log(nombres) // ["Ana", "Julia"]
// for (let i= 0; i < nombres.length;  i+=1){
//     console.log(nombres[i]) // ⇒ Ana y julia
// }

console.log("--------------------------------")
/**
 * Splice

El método splice() permite eliminar uno o varios elementos de un array en cualquier posición. Funciona con 2 parámetros: el primero es el índice donde se ubica el método para trabajar, y el segundo es la cantidad de elementos a eliminar desde esa posición.

 */
const animales = ['perro', 'gato', 'leon', 'jirafa', 'raton'];
for(let i = 0; i < animales.length; i+=1){
    console.log(animales[i])
}
animales.splice(1, 2)

console.log(animales)
// ['perro', 'jirafa', 'raton']]
for(let i = 0; i < animales.length; i+=1){
    console.log(animales[i])
}

console.log("--------------------------------")
/**
 * Join

Mediante el método join podemos generar un string con todos los elementos del array, separados por el valor que pasamos por parámetro:

 */
// const nombres = ["Luis", "Ana", "Julia", "Juan"]

// console.log( nombres.join(",") ) 
// // Luis, Ana, Julia

// console.log( nombres.join("*") ) 
// // Luis*Ana*Julia

console.log("---------------Concat-----------------");
/**Concat

Mediante el método concat podemos combinar dos Arrays en un único Array resultante:

 */
const perros   = ["Pupy", "Ronnie"]
console.log(perros)
const gatos = ["Mishi", "Garfield", "Zuri"]
console.log(gatos)
const mascotas = perros.concat(gatos)
console.log(mascotas)
// ["Pupy", “Ronnie”, "Mishi", “Garfield”, "Zuri"

console.log("---------------Slice-----------------");
/**
 * Slice

El método slice devuelve una copia de una parte del Array dentro de un nuevo Array, empezando por el inicio hasta fin (fin no incluído). El Array original no se modificará.

 */
// const nombres    = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
// const masculinos = nombres.slice(1, 3); // Nuevo array desde la posición 1 a 3. donde la posicion 3 no la incluye, porque no incluye el fin
// // masculinos contiene ['Pedro','Miguel']
// console.log(masculinos)

console.log("--------------IndexOF------------------");

/**
 * IndexOf

El método indexOf() nos permite obtener el índice de un elemento en un array. Recibe por parámetro el elemento que queremos buscar en el array y, en caso de existir, nos retorna su índice. Si el elemento no existe nos retornará como valor: -1

 */
const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
console.log(nombres);
console.log( nombres.indexOf('Rita') ) // ⇒ 0
console.log( nombres.indexOf('Ana') ) // ⇒ 3
console.log( nombres.indexOf('Julieta') ) // ⇒ -1

console.log("--------------Includes------------------");

/**
 * Includes

Similar al anterior, el método includes me permite saber si un elemento que recibo por parámetro existe o no dentro de un array, retornando un valor booleano en caso afirmativo o negativo:

 */
//const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
console.log( nombres.includes('Rita') ) // ⇒ true
console.log( nombres.includes('Miguel') ) // ⇒ true
console.log( nombres.includes('Julieta') ) // ⇒ false

console.log("--------------------------------");
/**
 * Reverse

Como su nombre lo indica, el método reverse() invierte el orden de los elementos dentro de un array.

 */
//const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
nombres.reverse()
console.log( nombres ) 
// ⇒ ['Vanesa', 'Ana','Miguel', 'Pedro','Rita']

console.log("--------------------------------");

/**
 * Arrays de objetos
 * Los array pueden usarse para almacenar objetos personalizados. Podemos asignar objetos literales o previamente instanciados en la declaración del array o agregar nuevos objetos usando el método push y el constructor.

 */

const objeto1 = { id: 1, producto: "Arroz" };
const array   = [objeto1, { id: 2, producto: "Fideo" }];
array.push({ id: 3, producto: "Pan" });
console.log(array)

console.log("--------------------------------");
/**
 * For.. Of

La sentencia for...of permite recorrer un array ejecutando un bloque de código por cada elemento del objeto.

 */
const productos = [
    { id: 1, producto: "Arroz" },
    { id: 2,  producto: "Fideo" },
    { id: 3,  producto: "Pan" }
];
// for (let i = 0; i < productos.length; i+=1) {
//     console.log(productos[i].id + " : " + productos[i].producto)
// }
 for (const producto of productos) {
     console.log(producto.id + " : " + producto.producto);
 }
