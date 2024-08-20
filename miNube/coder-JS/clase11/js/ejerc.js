// console.log(localStorage);
//                        //clave         //valor
// localStorage.setItem('bienvenida', "Hola coders"); //no hay problema
// localStorage.setItem('numero',5);  //podemos guardar pero cuando recibimos solo recibimos una cadena de caracteres
//  localStorage.setItem('booleano', true); //podemos guardar pero cuando recibimos solo recibimos una cadena de caracteres
//  localStorage.setItem('basura', "No sirve" ); 

// console.log(localStorage.length); //cuantas cosas tengo guardadas
// localStorage.removeItem('basura');

//SOLUCIONES
let numero = Number(localStorage.getItem('numero'));
let bandera = localStorage.getItem('booleano')
bandera = bandera === "true"; //lo que hago aca es asignarle a bandera el resultado de una operacion y la operacion lo que hace es fijarse si hay adentro un true si lo es, s true y si no es false
console.log(bandera);
console.log(typeof bandera)


let resultado = document.querySelector('#valor');
resultado.textContent = numero + numero;


//  localStorage.setItem('alumnos', ["Maria", "Marta", "Mateo"]); //podemos guardar pero cuando recibimos solo recibimos una cadena de caracteres
const alumnosArray = localStorage.getItem('alumnos'); //esto trae una cadena de caracteres separadas por comas
let respuesta = alumnosArray.split(',') //el slip busca lo que le decimos en este caso la coma y lo hace parte de un array
console.log(respuesta)

//  localStorage.setItem('producto', {nombre: "Fideos", precio: 1000}); //se guarda mal y se recibe mal

const item = {nombre: "Fideos", precio: 1000};
console.log(item);
console.log(item.nombre);

localStorage.setItem('producto', JSON.stringify(item)) //ahora productos se guardo como un objeto

let res = localStorage.getItem('producto');
console.log(res); //ahora tenemos devuelta una cadena de caracteres ya no es mas un objeto

//para recuperarlo
let objetoProducto = JSON.parse(localStorage.getItem('producto')) //lo que le decimos es parceame esto

console.log(objetoProducto);
console.log(objetoProducto.nombre)


