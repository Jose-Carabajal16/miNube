// const electrodomesticos = [
//     {
//         marca: "Samsung",
//         modelo: "Heladera",
//         color: "Gris",
//         precio: 1500
//     },
//     {
//         marca: "LG",
//         modelo: "Lavadora",
//         color: "Blanco",
//         precio: 800
//     },
//     {
//         marca: "LG",
//         modelo: "Televisor",
//         color: "Negro",
//         precio: 2000
//     },
//     {
//         marca: "Sony",
//         modelo: "Televisor",
//         color: "Gris",
//         precio: 1000
//     },
//     {
//         marca: "Samsung",
//         modelo: "Aspiradora",
//         color: "Azul",
//         precio: 400
//     },
//     {
//         marca: "Sony",
//         modelo: "Reproductor de Blu-ray",
//         color: "Negro",
//         precio: 250
//     },
//     {
//         marca: "Samsung",
//         modelo: "Microondas",
//         color: "Negro",
//         precio: 150
//     }
// ];

// console.log(electrodomesticos);

// // Variables
// let marca = prompt("Ingresar marca: 'Samsung, Sony, LG'");
// let modelo = prompt("Ingresa un electrodomestico");
// let color = prompt("Ingresa un color");

// const datosBusqueda = {
//     marca: marca,
//     modelo: modelo,
//     color: color,
//     minimo: 250,
//     maximo: 2000, 
// }

// // Presentamos los electrodomésticos
// function mostrarElectrodomesticos(productos) {
//     productos.forEach(electrodomestico => {
//         console.log("Marca: " + electrodomestico.marca + " - " + "Modelo: " + electrodomestico.modelo + " - " + "Color: " + electrodomestico.color + " - " + "Precio: " + electrodomestico.precio)
//     });
// }

// // Filtrar electrodoméstico por marca
// function filtrarMarca(producto) {
//     if (datosBusqueda.marca) {
//         return producto.marca === datosBusqueda.marca
//     }
//     return producto;
// }

// // Filtrar electrodoméstico por modelo
// function filtrarModelo(producto) {
//     if (datosBusqueda.modelo) {
//         return producto.modelo === datosBusqueda.modelo
//     }
//     return producto;
// }

// // Filtrar electrodoméstico por color
// function filtrarColor(producto) {
//     if (datosBusqueda.color) {
//         return producto.color === datosBusqueda.color
//     }
//     return producto;
// }

// // Filtrar electrodoméstico por precio mínimo
// function precioMinimo(producto) {
//     if (datosBusqueda.minimo) {
//         return producto.precio >= datosBusqueda.minimo
//     }
//     return producto;
// }

// // Filtrar electrodoméstico por precio máximo
// function precioMaximo(producto) {
//     if (datosBusqueda.maximo) {
//         return producto.precio <= datosBusqueda.maximo // Corregido aquí
//     }
//     return producto;
// }

// // Filtrar electrodoméstico
// function filtrarElectrodomesticos() {
//     const resultado = electrodomesticos.filter(filtrarMarca).filter(filtrarModelo).filter(filtrarColor).filter(precioMinimo).filter(precioMaximo);
//     if (resultado.length > 0) {
//         mostrarElectrodomesticos(resultado);
//     } else {
//         console.error("Sin resultado")
//     }
// }

// filtrarElectrodomesticos();
const electrodomesticos = [
    {
        marca: "Samsung",
        modelo: "Heladera",
        color: "Gris",
        precio: 1500
    },
    {
        marca: "LG",
        modelo: "Lavadora",
        color: "Blanco",
        precio: 800
    },
    {
        marca: "LG",
        modelo: "Televisor",
        color: "Negro",
        precio: 2000
    },
    {
        marca: "Sony",
        modelo: "Televisor",
        color: "Gris",
        precio: 1000
    },
    {
        marca: "Samsung",
        modelo: "Aspiradora",
        color: "Azul",
        precio: 400
    },
    {
        marca: "Sony",
        modelo: "Reproductor de Blu-ray",
        color: "Negro",
        precio: 250
    },
    {
        marca: "Samsung",
        modelo: "Microondas",
        color: "Negro",
        precio: 150
    }
];

// Variables
let marca = prompt("Ingresar marca: 'Samsung, Sony, LG'");
let modelo = prompt("Ingresa un electrodomestico");
let color = prompt("Ingresa un color");

const datosBusqueda = {
    marca: marca,
    modelo: modelo,
    color: color,
    minimo: 250,
    maximo: 2000, // Corregido el valor máximo
}

// Presentamos los electrodomésticos en un alert
function mostrarElectrodomesticosEnAlert(productos) {
    let mensaje = "Resultados de la búsqueda:\n\n";
    productos.forEach(electrodomestico => {
        mensaje += "Marca: " + electrodomestico.marca + " - " + "Modelo: " + electrodomestico.modelo + " - " + "Color: " + electrodomestico.color + " - " + "Precio: " + electrodomestico.precio + "\n";
        console.log("Marca: " + electrodomestico.marca + " - " + "Modelo: " + electrodomestico.modelo + " - " + "Color: " + electrodomestico.color + " - " + "Precio: " + electrodomestico.precio)
        
    });
    alert(mensaje);
}

// Filtrar electrodoméstico por marca
function filtrarMarca(producto) {
    if (datosBusqueda.marca) {
        return producto.marca === datosBusqueda.marca
    }
    return producto;
}

// Filtrar electrodoméstico por modelo
function filtrarModelo(producto) {
    if (datosBusqueda.modelo) {
        return producto.modelo === datosBusqueda.modelo
    }
    return producto;
}

// Filtrar electrodoméstico por color
function filtrarColor(producto) {
    if (datosBusqueda.color) {
        return producto.color === datosBusqueda.color
    }
    return producto;
}

// Filtrar electrodoméstico por precio mínimo
function precioMinimo(producto) {
    if (datosBusqueda.minimo) {
        return producto.precio >= datosBusqueda.minimo
    }
    return producto;
}

// Filtrar electrodoméstico por precio máximo
function precioMaximo(producto) {
    if (datosBusqueda.maximo) {
        return producto.precio <= datosBusqueda.maximo // Corregido aquí
    }
    return producto;
}

// Filtrar electrodoméstico
function filtrarElectrodomesticos() {
    const resultado = electrodomesticos.filter(filtrarMarca).filter(filtrarModelo).filter(filtrarColor).filter(precioMinimo).filter(precioMaximo);
    if (resultado.length > 0) {
        mostrarElectrodomesticosEnAlert(resultado);
    } else {
        alert("Sin resultado");
        console.error("Sin resultado")
    }
}

filtrarElectrodomesticos();
