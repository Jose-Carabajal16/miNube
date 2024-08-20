// let contador =0 //inicializado en 0


// //codigo
// contador++


// //codigo
// contador++

// //codigo
// contador++

// //codigo
// contador++
// contador = "pepe" //redefino la variable → esto es lo que queremos evitar
// console.log(contador)//quiero ver cuanto es el contador

//los clousure funcionan para evitar que se redifina una variable que nosotros intentamos proteger

let contador = (() => {
    let contador = 0

    const incrementar = () =>{
        contador ++
    }
    const restar = () =>{
        contador --
    }
    const getContador = () =>{
        return contador

    }
    return {incrementar, restar, getContador}
})()//autoinvoco la funcion

contador.incrementar()
contador.incrementar()
contador.incrementar()
contador.incrementar()
console.log(contador.getContador())