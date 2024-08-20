let productosCarrito = [];
let totalCompra = 0;
let productos = [];

//DOM
const carritoIcono = document.querySelector('#carrito-icono');
const carrito = document.querySelector('#carrito');
const cerrarCarrito = document.querySelector('#cerrar');
const listaProductos = document.querySelector('#container-productos');
const contenedorCarrito = document.querySelector('#carrito-conteiner');
const vaciarCarrito = document.querySelector('.boton-eliminar');
const mensajeVacio = document.querySelector('#mensaje-vacio');
const botonComprar = document.querySelector('.boton-comprar');
const totalCarrito = document.querySelector('.total');
const precioTotalElemento = document.querySelector('.precio-total');
//console.log(listaProductos);
/**FUNCIONES */
// Función para agregar productos al carrito
function agregarProductos(evento) {
        //console.log(evento.target.classList.contains('agregar'))
    if (evento.target.classList.contains('agregar')) {
        //console.log("Existe la clase")
        /**a que producto corresponde el boton**/
        //console.log(evento.target.getAttribute)
        const productoId = evento.target.getAttribute('data-id');
        const productoSeleccionado = productos.find(producto => producto.id === parseInt(productoId));
        //console.log(productoSeleccionado)
        agregarAlCarrito(productoSeleccionado);
    }
}

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
    const productoExistente = productosCarrito.find(item => item.id === producto.id);
    //console.log(productoExistente)

    if (productoExistente) {
        productoExistente.cantidad+=1;
    } else {
        productosCarrito.push({ ...producto, cantidad: 1 });
    }

    totalCompra += producto.precio;
    actualizarCarrito();
}

// Función para crear la vista del carrito
function crearCarrito() {
    borrarHTML();
    productosCarrito.forEach(producto => {
        const articulos = document.createElement('div');
        //console.log(articulos)
        articulos.innerHTML = `
            <div class="carrito-card">
                <img src="/images/${producto.img}" alt="" class="carrito-imagen">
                <div class="carrito-detalle">
                    <p class="titulo-producto">${producto.titulo}</p>
                    <p class="precio-producto">$${producto.precio}</p>
                    <p class="cantidad-producto">${producto.cantidad}</p>
                </div>
                <button class="eliminar-producto" data-id="${producto.id}">
                    <i class="bi bi-trash-fill"></i>
                </button>
            </div>
        `;
        contenedorCarrito.appendChild(articulos);
    });
    sincronizarLocalStorage();
    mensajeCarritoVacio();
}

// Función para borrar el contenido del carrito
function borrarHTML() {
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}

// Función para vaciar el carrito + sweerAlert
function limpiarCarrito() {
    Swal.fire({
        title: 'Borrar',
        text: '¿Estás seguro que quieres eliminar todos los productos del carrito?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        iconHtml: '<i class="bi bi-trash3-fill"></i>'
    }).then((result) => {
        if (result.isConfirmed) {
            productosCarrito = [];
            totalCompra = 0;
            actualizarCarrito();
            mensajeCarritoVacio();
        }
    });
}

// Función para eliminar un producto del carrito + sweetAlert
function removerElProducto(evento) {
    if (evento.target.classList.contains('eliminar-producto')) {
        const productoId = parseInt(evento.target.getAttribute('data-id')); 
        //console.log(productoId);
        const productoEliminadoIndex = productosCarrito.findIndex(producto => producto.id === productoId);
        //console.log(productoEliminadoIndex)
        if (productoEliminadoIndex !== -1) {
            const productoEliminado = productosCarrito[productoEliminadoIndex];
            Swal.fire({
                title: 'Borrar',
                text: '¿Estás seguro que quieres borrar este elemento?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Aceptar',
                cancelButtonText: 'Cancelar',
                iconHtml: '<i class="bi bi-trash3-fill"></i>'
            }).then((result) => {
                if (result.isConfirmed) {
                    totalCompra -= productoEliminado.precio * productoEliminado.cantidad;
                    productosCarrito.splice(productoEliminadoIndex, 1); //quitar el producto del array
                    actualizarCarrito();
                    mensajeCarritoVacio();
                }
            });
        }
    }
}



// Función para actualizar el carrito
function actualizarCarrito() {
    borrarHTML();
    crearCarrito();
    actualizarTotal();
}

// Función para sincronizar el carrito con el localStorage
function sincronizarLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(productosCarrito));
}

// Función para actualizar el total en el HTML
function actualizarTotal() {
    precioTotalElemento.textContent = `$${totalCompra.toFixed(2)}`;
}

// Función para mostrar mensaje cuando el carrito está vacío
function mensajeCarritoVacio() {
    if (productosCarrito.length === 0) {
        mensajeVacio.style.display = 'block';
        vaciarCarrito.style.display = 'none';
        botonComprar.style.display = 'none';
        totalCarrito.style.display = 'none';
    } else {
        mensajeVacio.style.display = 'none';
        vaciarCarrito.style.display = 'block';
        botonComprar.style.display = 'block';
        totalCarrito.style.display = 'block';
    }
}

// Función para dibujar los productos en la vista
function dibujarProductos(productos) {
    const contenido = document.querySelector('#cards-container');
    let html = '';
    productos.forEach(({ img, titulo, descripcion, precio, id }) => {
        html += `
            <div class="card">
                <img src="/images/${img}" alt="">
                <div class="detalle">
                    <h3 class="titulo-card">${titulo}</h3>
                    <p class="descripcion">${descripcion}</p>
                    <p class="precio">$${precio}</p>
                    <button class="agregar" data-id="${id}">Agregar a Carrito</button>
                </div>
            </div>
        `;
    });
    contenido.innerHTML = html;
}

// Eventos del proyecto
listaProductos.addEventListener('click', agregarProductos);
carritoIcono.addEventListener('click', () => carrito.classList.add('active'));
cerrarCarrito.addEventListener('click', () => carrito.classList.remove('active'));
vaciarCarrito.addEventListener('click', limpiarCarrito);
carrito.addEventListener('click', removerElProducto);

// Carga inicial
window.addEventListener('DOMContentLoaded', () => {
    fetch('data/productos.json')
        .then(respuesta => respuesta.json())
        .then(data => {
            productos = data; 
            dibujarProductos(productos); // Mostrar los productos en la página
        })
        .catch(() => {
            Swal.fire({
                title: 'Error!',
                text: 'Error al cargar los productos en la pagina',
                icon: 'error',
                confirmButtonText: 'Aceptar'
              })
        });

    const datosLocalStorage = localStorage.getItem('carrito');
    //console.log(datosLocalStorage);
    if (datosLocalStorage) {
        productosCarrito = JSON.parse(datosLocalStorage);
        totalCompra = productosCarrito.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
        actualizarCarrito();
    }
});
