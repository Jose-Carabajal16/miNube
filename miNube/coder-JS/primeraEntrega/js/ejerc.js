// Función para calcular el costo total de productos
function calcularCostoTotal() {
    let costoTotal = 0;

    for (let i = 1; i <= 2; i++) {
        let costoProducto = prompt("Ingrese el costo del Producto " + i + ":");

        // Validar que el costo ingresado sea un número válido
        while (costoProducto === "" ) {
            alert("Por favor, tienes que ingresar un numero para calcular el costo del producto" + i + ":");
            costoProducto = prompt("Ingrese el costo del Producto " + i + ":");
        }

        costoTotal += parseFloat(costoProducto);
    }

    // Mostrar el resultado
    alert("El costo total es: $" + costoTotal.toFixed(2));
}

// Llamar a la función para iniciar el proceso
calcularCostoTotal();