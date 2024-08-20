//la variable let solo vive en el bloque donde es llamada, no es una variable global
let nombre = { usuario: "Josefina"};
let user = nombre

nombre.usuario = "pepe"
 console.log(user);

//variable const
const edad = 30
const numeros = [1,2,3,4,5,6,7,8]
numeros[0] = "a"
console.log(numeros)
//reestructurar un objeto
const persona = {nombre: "josefina"}
console.log(persona)
persona.edad = 24
persona.email = "josefina@gmail.com"
console.log(persona)