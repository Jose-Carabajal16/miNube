// class Producto {
//     constructor(nombre, precio) {
//         this.nombre  = nombre.toUpperCase();
//         this.precio  = parseFloat(precio);
//         this.vendido = false;
//     }
//     sumaIva() {
//         this.precio = this.precio * 1.21;
//     }
// }
// //Declaramos un array de productos para almacenar objetos
// const productos = [];
// productos.push(new Producto("arroz", "125"));
// productos.push(new Producto("fideo", "70"));
// productos.push(new Producto("pan", "50"));
// console.log(productos);
// // for (let i = 0; i < productos.length; i++) {
// //     console.log(productos[i])
// //     console.log("--------------------------------")
// // }
// //Iteramos el array con for...of para modificarlos a todos
// for (const producto of productos) 
//     producto.sumaIva(); // Aplicamos el IVA

// class Producto {
//     constructor(nombre, precio, cantidad) {
//         this.nombre = nombre;
//         this.precio = precio;
//         this.cantidad = cantidad;
//     }
//     calculoIVA(){
//         return this.precio * 1.21
//     }
// }

// const arrayProductos = [];

// do{
//     let comprobacion = prompt("Ingrese un producto o fin para terminar de agregar");
//     if(comprobacion === "fin" || comprobacion === "FIN" || comprobacion === "Fin"){
//         break;
//     } else {
//         let producto = comprobacion;
//         let precioP = prompt("Ingrese el precio del producto");
//         let cantidadP = prompt("Ingrese la cantidad (menor a 10)");

//         arrayProductos.push(new Producto(producto, precioP, cantidadP));
//     }
// } while (comprobacion != "fin" || comprobacion != "FIN" || comprobacion != "Fin")

// console.log(arrayProductos);

// let costo = arrayProductos.calculoIVA();
// console.log(costo)

// class Producto {
//     constructor(nombre, precio, cantidad) {
//         this.nombre = nombre;
//         this.precio = precio;
//         this.cantidad = cantidad;
//     }
//     calculoIVA(){
//         return this.precio * 1.21; // Devuelve el precio con IVA del producto
//     }
// }

// const arrayProductos = [];

// do {
//     let comprobacion = prompt("Ingrese un producto (Heladera, Televisor, celular)o fin para terminar de agregar");
//     if (comprobacion.toLowerCase() === "fin") {
//         break;
//     } else {
//         let producto = comprobacion;
//         let precioP = parseFloat(prompt("Ingrese el precio del producto"));
//         let cantidadP = parseInt(prompt("Ingrese la cantidad (menor a 10)"));

//         arrayProductos.push(new Producto(producto, precioP, cantidadP));
//     }
// } while (true);

// console.log(arrayProductos);

// let costoTotal = 0;
// for (const producto of arrayProductos) {
//     costoTotal += producto.calculoIVA(); // Suma el precio con IVA de cada producto al costo total
// }

// console.log("Costo total con IVA:", costoTotal.toFixed(2));
// alert("Costo total con IVA: " + costoTotal.toFixed(2))
class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.cantidad = parseInt(cantidad);
    }

    calcularPrecioTotal() {
        return this.precio * this.cantidad; // Calcula el precio total sin IVA
    }

    calcularPrecioTotalConIva() {
        const precioTotalSinIva = this.calcularPrecioTotal(); // Calcula el precio total sin IVA
        return precioTotalSinIva * 1.21; // Calcula el precio total con IVA
    }
}

const arrayProductos = [];

do {
    let comprobacion = prompt("Ingrese un producto o fin para terminar de agregar");
    if (comprobacion.toLowerCase() === "fin") {
        break;
    } else {
        let producto = comprobacion;
        let precioP = parseFloat(prompt("Ingrese el precio del producto"));
        let cantidadP = parseInt(prompt("Ingrese la cantidad (menor a 10)"));

        arrayProductos.push(new Producto(producto, precioP, cantidadP));
        console.log("Producto agregado:", arrayProductos[arrayProductos.length - 1]); // Mostrar el último producto agregado

        
    }
} while (true);


let costoTotalConIva = 0;
for (const producto of arrayProductos) {
    costoTotalConIva += producto.calcularPrecioTotalConIva(); // Suma el precio total con IVA de cada producto al costo total
}

console.log("Costo total con IVA:", costoTotalConIva.toFixed(2));
alert("Costo total con IVA: "+ costoTotalConIva.toFixed(2))