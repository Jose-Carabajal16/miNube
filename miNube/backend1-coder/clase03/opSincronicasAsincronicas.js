const cubo = a => a**3
console.log(cubo(3))

const cuadrado = a => a**2
console.log(cuadrado(2))

//Sincronismo
/***
 * Las intrucciones se ejecutaban en cascada, y son bloquenates esto significa que las ptras tareas no pueden comenzar a ejecutarse hasta que la primera no haya terminado
 */
const op4 = () => {
    console.log("Iniciando op4")
    let fechaFin = Date.now()+2000
    while(Date.now() < fechaFin){
        //espero...
    }
    console.log("op4")
}
console.log("inicio")
console.log("op1")
console.log("op2")
console.log("op3")
op4()
console.log("Fin")

//Asincronicas
/**SON TAREAS QUE SE VAN A AJECUTAR EN PARALELO
 * Cada una seguira el hilo de resolicion que considere su ritmo
 * hay que ser cautelosos alk utilizarlas ya que
 * No se controla cuadno terminara solo cuando comienza 
 * si una tarea depende del resultado de la otra, habra problemas, pues esperara la ejecucion en paralelo
 */

const fs = require("fs");//importamos la libreria FS

fs.writeFile("./archivo1.txt", "datos1", error=>{
    console.log("archivo1 guardado");
})

