//OBJETOS
//Definicion
/**
 * son un conjunto de datos que corresponden a una entidad
 * Se lo distingue por {}
 * Nombre tecnico → objeto literal
 * tipo de dato → object
 */
//Son variables que estan desconectadas, pero que tienen una relacion
//Persona-Entidad
let nombrePersona = "Homero";
let edadPersona   = 39;
let callePersona  = "Av. Siempreviva 742";
// Los variables anteriores entran relacionados entre sí, entonces mejor usamos un objeto literal
// let persona1 = { 
//     nombre: "Homero", 
//     edad: 39, 
//     calle: "Av. Siempreviva 742" 
// }

// console.log(persona1.nombre)

// //acceder a los datos de un objeto
// //alert(persona1.nombre)

// /**como cambiar el valor de la variable */
// persona1.nombre = "Bar"
// console.log(persona1.nombre)
// /**agregar una propidad */
// persona1.estadoCivil = "soltero";
// console.log(persona1);

/**
 * Window → es la ventana del navegador y es un objeto
 * 
 */

/**funciones constructoras → diferentes objetos con mismas caracteristicas */
/**
 * let auto1 = {
 * marca: fiat
 * modelo: cronos
 * }
 * 
 * let auto2 = {
 * marca: ford
 * modelo: "fiesta"
 * }
 */

/**THIS y NEW
 * 
En resumen, la palabra clave this dentro de la función constructora Heroes se utiliza para referirse al objeto que se está creando, y el operador new se utiliza para crear nuevas instancias de ese objeto con valores específicos para las propiedades nombre, alterEgo y superPoder.
 */
console.log("---------------")
function Heroes(n, a, s){ //→funciones constructoras, empiezan con mayuscula y permiten crear un molde para poder utilizarlo y crear diferentes variables con las mismas propiedades
    this.nombre = n;
    this.alterEgo = a;
    this.superPoder = s;
}

const super1 = new Heroes("Diana Prince", "Mujer maravilla", "lazo");

const super2 = new Heroes("Barbara", "Batichica", "moto");
/** */
console.log(super1)
console.log(super2)

//Métodos y operaciones con objetos
/**
 * Metodo → el valor de una propiedad puede tener una funcion
 */
console.log("---------------")
let producto = {
    nombre: "TV",
    precio: 30000,
    stock: 50,
    descripcion: "Este es un smartTV",
    imprimir : function(){
        console.log(this.nombre + " Tiene un precio de " + this.precio)
    }

}
// console.log("---------------")
// function Producto(nombre, precio){
//     this.nombre = nombre;
//     this.precio = precio;

//     this.calcularImpuesto = function(){
//         return this.precio * 1.21
//     }
// }

// let tv = new Producto("TV", 52000);
// console.log(tv);

// let totalPagar = tv.calcularImpuesto();

// console.log("El total a pagar es " + totalPagar)

// console.log("---------------")
// let celular = new Producto("celular a20", 52000);
// console.log(celular);

// let totalPagar2 = celular.calcularImpuesto();

// console.log("El total a pagar es " + totalPagar2)

console.log("--------clases-------");

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;

        }
    calcularImpuesto(){
        return this.precio * 1.21
    }
}

let tv = new Producto("TV", 52000);
console.log(tv);

let totalPagar = tv.calcularImpuesto();

console.log("El total a pagar es " + totalPagar)

console.log("---------------")
let celular = new Producto("celular a20", 52000);
console.log(celular);

let totalPagar2 = celular.calcularImpuesto();

console.log("El total a pagar es " + totalPagar2)

console.log("--------clases-------");
/** Operador IN y FOR...IN
 * El operador in devuelve true si la propiedad especificada existe en el objeto. 
Mientras que el bucle for...in permite acceder a todas las propiedades del objeto, obteniendo una propiedad por cada iteración.
*/
let persona1 = { 
    nombre: "Homero", 
    edad: 39, 
    calle: "Av. Siempreviva 742" 
};
console.log("fuerza" in persona1) 