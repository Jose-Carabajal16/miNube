//es un objeto que nos permitira encpasular una operacion la cual reaccionara a dos posibles situaciones dentro de la una promesa:
/**Que deberia hacer si la promesa se cumple
 *  Que deberia hacer si la promesa no se cumple
 */

const suma = (a, b) => {
    return new Promise((res, rej) => {//resolve → si todo sale bien, indica el resultado positivo y rejet → si hay inconvenientes emite el error via rejet  
        if( typeof a!=='number' || typeof b!=='number'){
            rej("Error solo se aceptan argumentos numericos")
        }

        res(a + b)

    })
}
const multiplicar = (a, b) => {
    return new Promise((res, rej) => {
        if( typeof a!=='number'|| typeof b != "number"){
            rej("Error solo se aceptan argumentos numericos")
        }

        res(a * b)
    })//resolve)
}
suma(5,5)
    .then(res1 =>{
        return suma(res1, 5)
    })
    .then(res2 => suma(res2, "5"))
    .then(res3 => suma(res3, 5))
    .then(res2 => suma(res2, 5))
    .then(resFinal => console.log("Encadenamiento de promesas:", resFinal))
    .catch(error => error.massage?console.log(error.massage):console.log(error))

//console.log(suma(5,6))
//console.log(suma("juan", 6))

let resultado = suma(5,6) + 100
console.log(resultado)

suma(5,6)
    .then((res) => {
              console.log(res)
    })
    .catch((error) => {
        console.log(error)
    })
    suma(5,"6")
    .then((res) => {
              console.log(res)
    })
    .catch((error) => {
        console.log(error)
    })