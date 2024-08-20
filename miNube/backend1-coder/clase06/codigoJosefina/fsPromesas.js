const fs = require("fs")

let rutaArchivo = "./archivos/archivoPromesas.txt"
let texto3 = `
“Debe trabajar el hombre
Para ganarse su pan;
Pues la miseria, en su afán
De perseguir de mil modos,
Llama a la puerta de todos
Y entra en la del haragán”.

“Muchas cosas pierde el hombre
Que a veces la vuelve a hallar;
Pero los debo enseñar,
Y es güeno que lo recuerden:
Si la vergüenza se pierde,
Jamás se la vuelve a encontrar”.

José Hernandez - fragmento del Martin Fierro`

/** 
fs.promises.writeFile(rutaArchivo, texto3)
    .then(() => {
        console.log("Archivo generado...!!!")

        fs.promises.readFile(rutaArchivo, { encoding: "utf-8" })
            .then(textoRecuperado => {
                console.log(textoRecuperado)

                fs.promises.appendFile(rutaArchivo, "\n\nEditorial Sudamericana")
                    .then(()=>{
                        console.log("Editorial agregada")
                    })
            })
            .catch(error => console.log(error.message))

    })
    .catch(error => console.log(error.message))


fs.promises.writeFile(rutaArchivo, texto3)
    .then(() => {
        console.log("Archivo generado...!!!")
        return fs.promises.readFile(rutaArchivo, { encoding: "utf-8" })
    })
    .then(textoRecuperado => {
        console.log(textoRecuperado)
        return fs.promises.appendFile(rutaArchivo, "\n\nEditorial Sudamericana")
    })
    .then(()=>{
        console.log("Editorial agregada")

        setTimeout(() => {
            fs.promises.unlink(rutaArchivo)
                .then(()=>console.log("Archivo eliminado...!!!"))
        }, 2000);
    })
    .catch(error => console.log(error.message))
*/

/** 
const archivos=async()=>{ // const archivos = async() => {} → Se define una función asíncrona llamada archivos. Las funciones asíncronas permiten manejar operaciones que toman tiempo, como la lectura y escritura de archivos, de una manera más ordenada usando async y await.

    try { //try {} → Se inicia un bloque try para intentar ejecutar el código que sigue. Si ocurre un error en cualquiera de las operaciones, se capturará y manejará en el bloque catch.
        await fs.promises.writeFile(rutaArchivo, texto3) // Concepto: await espera que la operación de escritura en el archivo termine antes de continuar. fs.promises.writeFile crea o sobrescribe un archivo con el contenido de texto3 en la ubicación especificada por rutaArchivo. Ejemplo: Si rutaArchivo es "miArchivo.txt" y texto3 es "Hola, mundo!", esta línea creará un archivo llamado miArchivo.txt con el texto "Hola, mundo!".
        let textoRecuperado=await fs.promises.readFile(rutaArchivo, {encoding:"utf-8"}) // Concepto: Esta línea lee el contenido del archivo especificado por rutaArchivo y lo almacena en la variable textoRecuperado. El archivo se lee como texto (utf-8).
        console.log(textoRecuperado)
        await fs.promises.appendFile(rutaArchivo, "\n\nEditorial Planeta") //Concepto: Agrega el texto "\n\nEditorial Planeta" al final del archivo. \n\n representa dos saltos de línea.
        console.log("Editorial agregada")
    
        setTimeout(async() => { //Concepto: setTimeout retrasa la ejecución de la función de eliminación del archivo durante 2 segundos (2000 milisegundos).
            await fs.promises.unlink(rutaArchivo) //Concepto: Elimina el archivo especificado por rutaArchivo después de 2 segundos.Ejemplo: Si rutaArchivo es "miArchivo.txt", este archivo será eliminado 2 segundos después de que se haya agregado la editorial.
            console.log("Archivo eliminado...!!!")
        }, 2000);
    } catch (error) {
        console.log(error.message)
    }

}

archivos() //- **Concepto:** Llama a la función `archivos` para que se ejecute todo el código descrito anteriormente.

*/
class HeroesManager{ //1. class HeroesManager { constructor(ruta) { this.path = ruta } }
    // Concepto: Se define una clase llamada HeroesManager. La clase es una plantilla para crear objetos que manejarán héroes.
    // Ejemplo: Cuando creas una instancia de HeroesManager, le pasas una ruta de archivo (ruta) que se almacenará en la propiedad this.path. Esta ruta indica dónde se guardará la lista de héroes.
    // Código Relacionado: const heroesManager = new HeroesManager("./archivos/heroes.json") crea una instancia de HeroesManager con la ruta ./archivos/heroes.json.
    constructor(ruta){
        this.path=ruta
    }

    async getHeroes(){ // let heroes = await this.getHeroes() obtiene la lista de héroes actual.
        //2. async getHeroes() { ... }
        // Ejemplo: Si heroes.json contiene [{"id":1,"name":"Batman"},{"id":2,"name":"Superman"}], entonces getHeroes() devolverá un array con esos objetos. Si el archivo no existe, devolverá [] (un array vacío).


        


        if(fs.existsSync(this.path)){ //// Concepto: Este método asíncrono intenta leer la lista de héroes del archivo en this.path. Si el archivo existe, lo lee y convierte su contenido de JSON a un objeto JavaScript usando JSON.parse. Si el archivo no existe, retorna una lista vacía.
            return JSON.parse(await fs.promises.readFile(this.path, {encoding:"utf-8"}))
        }else{
            return []
        }
    }

    async addHeroe(name){ //3. async addHeroe(name) { ... }
        // Concepto: Este método asíncrono agrega un nuevo héroe al archivo.  L
        // Ejemplo: Si name es "Robin" y la lista de héroes actual tiene los héroes Batman (id: 1) y Superman (id: 2), Robin se agregará con id: 3.
        // validaciones quedan para ustedes...
        let heroes=await this.getHeroes() //Primero obtiene la lista actual de héroes usando getHeroes().


        // Validar si el héroe ya existe
        const heroeExistente = heroes.find(heroe => heroe.name.toLowerCase() === name.toLowerCase());

        if (heroeExistente) {
            console.log(`El héroe ${name} ya existe en el archivo con id ${heroeExistente.id}.`);
        } else {
            let id = 1; //luego, determina un nuevo id para el héroe basado en los ids existentes, lo agrega a la lista y guarda la lista actualizada en el archivo.
            if (heroes.length > 0) {
                id = Math.max(...heroes.map(d => d.id)) + 1;
            }

            heroes.push({ //Agregando el héroe: heroes.push({ id, name }) agrega el nuevo héroe a la lista.
                id,
                name
            });

        await fs.promises.writeFile(this.path, JSON.stringify(heroes, null, 5)) //Guardando la lista: await fs.promises.writeFile(this.path, JSON.stringify(heroes, null, 5)) convierte la lista actualizada a JSON y la guarda en el archivo especificado por this.path.
        console.log(`Heroe ${name} generado con id ${id}`) //Mensaje en consola: console.log(Heroe ${name} generado con id ${id}) imprime un mensaje indicando que el héroe ha sido agregado.
            }
        // Eliminar héroes duplicados por nombre
        this.eliminarDuplicadosPorNombre(heroes);
    }
    eliminarDuplicadosPorNombre(heroes) {
        const nombresUnicos = new Set();
        const heroesUnicos = heroes.filter(heroe => {
            if (nombresUnicos.has(heroe.name.toLowerCase())) {
                return false;
            } else {
                nombresUnicos.add(heroe.name.toLowerCase());
                return true;
            }
        });

        fs.promises.writeFile(this.path, JSON.stringify(heroesUnicos, null, 5))
            .then(() => console.log("Héroes duplicados eliminados, si había alguno."))
            .catch(err => console.error("Error al eliminar duplicados:", err));
    }
}


const heroesManager=new HeroesManager("./archivos/heroes.json")
//heroesManager.getHeroes().then(heroes=>console.log(heroes))

const app=async()=>{
    console.log(await heroesManager.getHeroes())
    await heroesManager.addHeroe("Robin")
    console.log(await heroesManager.getHeroes())

}

app()