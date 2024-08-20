class Persona {
    nombre=""
    email=""
    id=100
    static cantidadPersonasDefinidas = 0 //en lugar de quedar asociado a las instancias queda asociado a la clase Persona

    constructor(nombre, email){//en general se usa para asignarle valores a las propiedades
        this.nombre = nombre//por lo general en bJS veremos solo que se manejan con el construstor osea que nombre="" no es necessario todo sigue funcionando
        this.email = email
        Persona.cantidadPersonasDefinidas++//ESTO ME GARANTIZA QUE CADA VEZ QUE SE CREE UNA NUEVA PERSONA CON EL NEW MI CANTIDAD ESTATICA SE MODIFICARA 

    }
    saludar(){
        console.log(`Hola soy ${this.nombre}`)
    }

    getemail(){
        return this.email
    }
}

let persona1 = new Persona("Juan", "juan@gmail.com")
let persona2 = new Persona("Oscar", "oscar@gmail.com")
console.log(persona1)
console.log(persona2)
persona1.saludar()
persona2.saludar()

console.log(Persona.cantidadPersonasDefinidas)

//aCTIVIDAD CON CLASES
/**Se creara una clase que permitira llevar cuentas individuales segun cada responsable
 * definir la clase contador
 * la clase se creara con un nombre, representando al responsable del contador
 * el contador debe inicializarse en 0
 * debe existir una variable estatica que funcione como contador global de todas las instancias del contador creadas
 *
 *  
 * */

class Contador{//se recomienda utilizar siempre upperCamelcase
    static contadorGlobal = 0
    static cantidadContadores=0
    constructor(responsable){
        this.responsable = responsable
        this.contador = 0
        Contador.cantidadContadores++

    }
    incrementar(){
        this.contador++
        Contador.contadorGlobal++
    }
    getContador(){//que retorne el contador
        return this.contador
    }

}

let contador1 = new Contador("Jimena")
let contador2 = new Contador("Valentina")
let contador3 = new Contador("Carlos")
let contador4 = new Contador("Mario")

contador1.incrementar()
contador1.incrementar()
contador1.incrementar()
contador1.incrementar()
contador1.incrementar()
contador1.incrementar()


contador2.incrementar()
contador2.incrementar()
contador2.incrementar()
contador2.incrementar()
contador2.incrementar()

contador3.incrementar()
contador3.incrementar()
contador3.incrementar()

contador4.incrementar()
contador4.incrementar()
contador4.incrementar()

console.log("ACTIVIDAD")
console.log(`El responsable del contador 1 es: ${contador1.responsable} y suma: ${contador1.getContador()}`)
console.log(`El responsable del contador 1 es: ${contador2.responsable} y suma: ${contador2.getContador()}`)
console.log(`El responsable del contador 1 es: ${contador3.responsable} y suma: ${contador3.getContador()}`)
console.log(`El responsable del contador 1 es: ${contador4.responsable} y suma: ${contador4.getContador()}`)

console.log(`La cantidad total de contadores es: ${Contador.cantidadContadores}`)
console.log(`el total acumulado de contadores es: ${Contador.contadorGlobal}`)


//MANAGER PARA ALMACENAR DATOS DE MANERA CONTROLADA

// MANAGER PARA ALMACENAR DATOS DE MANERA CONTROLADA

class ProductManager {
    constructor() {
        this.productos = [];
    }

    agregarProduct(nombre, descripcion, precio, stock) {
        let existeProducto = this.productos.find(producto => producto.nombre === nombre);
        if (existeProducto) {
            console.log(`El producto ${existeProducto.nombre} ya existe`);
            return;
        }

        let id = 1;
        if (this.productos.length > 0) {
            id = this.productos[this.productos.length - 1].id + 1;
        }

        // validaciones
        this.productos.push({
            id,
            nombre,
            descripcion,
            precio,
            stock
        });
    }

    getProductos() {
        return this.productos;
    }
}

const productManager = new ProductManager();

productManager.agregarProduct("Martillo", "Martillo 1", 150, 4);
productManager.agregarProduct("Martillo", "Martillo 1", 150, 4);
productManager.agregarProduct("Destornillador", "Destornillador 1", 120, 5);
productManager.agregarProduct("Clavos", "Clavos anchos", 100, 6);

console.log("ProductManager");
console.log(productManager.getProductos());
