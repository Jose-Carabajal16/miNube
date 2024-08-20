document.addEventListener("DOMContentLoaded", function() {
    const productosAgregarCarrito = JSON.parse(localStorage.getItem("productos"));
    console.log(productosAgregarCarrito);
    const carritoVacio = document.querySelector("#carrito-vacio");
    console.log(carritoVacio);
    const carritoProductos = document.querySelector("#carrito-productos");
    const carritoAcciones = document.querySelector("#carrito-acciones");
    const carritoComprado = document.querySelector(".carritoComprado");

   // Verificamos si hay productos en el carrito
if (productosAgregarCarrito) {
    // Si hay productos, agregamos la clase "ocultar" al elemento de carrito vacío
    document.getElementById("carrito-vacio").classList.add("disabled");
  } else {
    // Si no hay productos, mostramos el elemento de carrito vacío
    document.getElementById("carrito-vacio").classList.remove("disabled");
  }
});
