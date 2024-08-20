


// class Producto {
//     constructor(nombre, precio, cantidad) {
//         this.nombre  = nombre.toUpperCase();
//         this.precio  = parseFloat(precio);
//         this.cantidad = parseInt(cantidad);
//         this.vendido = false;
//     }
//     sumaIva() {
//         this.precio = this.precio * 1.21;
//     }
//     vender() {
//         this.vendido = true;
//     }
// }

// function crearProducto(){
//     let nombre = prompt("Ingrese un electrodomestico: Heladera, Televisor, Microondas");
//     let precio = parseFloat(prompt("Ingrese precio de Venta del producto"));
//     let cantidad = parseInt(prompt("Cantidad del producto a vender (menor a 10)"));

//     if (cantidad > 10) {
//         alert("La cantidad ingresada no puede ser mayor a 10.");
//         return null; // Retorna null si la cantidad es mayor a 10
//     }

//     return new Producto(nombre, precio, cantidad); 
// }

// const nuevoProducto = crearProducto();

// if (nuevoProducto) {
//     // Calcular el precio total sin IVA
//     let precioTotalSinIva = nuevoProducto.precio * nuevoProducto.cantidad;

//     // Calcular el precio total con IVA
//     nuevoProducto.sumaIva();
//     let precioTotalConIva = nuevoProducto.precio * nuevoProducto.cantidad;

//     // Mostrar el precio total sin IVA en consola
//     console.log("Precio total (sin IVA):", precioTotalSinIva);

//     // Mostrar el precio total con IVA en consola
//     console.log("Precio total (con IVA):", precioTotalConIva);

//     // Mostrar el precio total con IVA en un alert
//     alert("Tus ventas fueron: $" + precioTotalConIva.toFixed(2));
// }

class Producto {
    constructor(precio, cantidad) {
        this.precio = parseFloat(precio);
        this.cantidad = parseInt(cantidad);
    }

    calcularPrecioTotalSinIva() {
        return this.precio * this.cantidad;
    }

    calcularPrecioTotalConIva() {
        return this.calcularPrecioTotalSinIva() * 1.21;
    }
}

function crearProducto() {
    let producto = prompt("Ingrese el nombre del producto: Heladera, Televisor, Microondas").toLowerCase();

    let precio;
    switch (producto) {
        case "heladera":
            precio = 10000;
            break;
        case "televisor":
            precio = 5000;
            break;
        case "microondas":
            precio = 4000;
            break;
        default:
            alert("Producto no válido.");
            return null;
    }

    let cantidad = parseInt(prompt("Ingrese la cantidad del producto a comprar (menor a 10):"));
    if (cantidad > 10) {
        alert("La cantidad ingresada no puede ser mayor a 10.");
        return null;
    }

    return new Producto(precio, cantidad);
}

const nuevoProducto = crearProducto();

if (nuevoProducto) {
    const precioTotalSinIva = nuevoProducto.calcularPrecioTotalSinIva();
    const precioTotalConIva = nuevoProducto.calcularPrecioTotalConIva();

    console.log("Precio total (sin IVA): $" + precioTotalSinIva.toFixed(2));
    console.log("Precio total (con IVA): $" + precioTotalConIva.toFixed(2));

    alert("El precio total es: $" + precioTotalConIva.toFixed(2));
}

