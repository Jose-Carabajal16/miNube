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
// 3*3 + 5*4
const operacion = async() => {
    let res1 = await multiplicar(3,3)
    let res2 = await multiplicar(5,4)
    let resFinal = await suma(res1, res2)
    console.log("Operacion", resFinal)
}
operacion()

