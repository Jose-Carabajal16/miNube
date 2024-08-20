let numero = prompt("Ingresa un numero");

if(numero >= 1000){
    alert("Correcto el numero es mayor a 1000")
} else if (numero >= 10 && numero <=50){
   alert("Numero entre 10 y 50")
} else {
    console.log("Invalido")
}

let saludo = prompt("Saludame");

if(saludo == "Hola" || saludo == "hola"){
    console.log("El usuario saludo correctamente")
} else {
    console.log("No identifique el saludo")
}