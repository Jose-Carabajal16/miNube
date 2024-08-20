//Cadena de caracteres
"Cadena de caracteres"
'Cadena de caracteres'

// Numeros
2
2
3
4

//Variables
// declaracion y asignacion de variables
let nombre = "Josefina";
//declaracion
let edad;
//asignacion cuando se le asigna el =
edad = 24;
//Las variables pueden cambiar
nombre = "Maria"

//Constantes → son aquellas que no van a cambiar

const PI = 3.14;

// PI = 3

//Constantes que deberian definirse en mayusculas

// Notacion de Variables
let apellido;
let estadoCivil; // camel case
let dia_de_la_semana // snake case

//mostrar dartos por consola
console.log("Hola a todos");
console.log(5);
console.log(nombre);
console.log("hola" + " " + nombre); 
 //Mostrar datos por pabtalla(no se recomienda)
//  alert(5);
//  alert(nombre);
//  alert("Hola a todos");
//  alert("hola" + " " + nombre); 
//Recibir otros datos del usuario
let edadJosefina = prompt("Edad");
console.log(edadJosefina);
alert(edadJosefina);

//OPERACIONES BASICAS
let resultado;
resultado = 1 + 3;
console.log(resultado);
resultado = edad%5; //en este caso devolvera el resto de la operacio
console.log(resultado);

//concatenacion → la suma se transforma en concatenacion cuando se utiliza cadana de caracteres
console.log("Maria tiene" + " " + edad + " " + "años" )
 //concatencacion de cadena de caracteres y numero
 console.log("5" + 5); //JS transforma el numero en cadena de carcteres → 55
 console.log(+"5"+5); //el signo + hace que se lea la cadena como un numero devolviendo → 10