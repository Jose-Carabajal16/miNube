let productosCarrito = []
let totalCompra = 0;
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
function agregarProductos(evento) {
    //console.log(evento.target.classList.contains('agregar'))
    if (evento.target.classList.contains('agregar')) {
        //console.log("Existe la clase")
        /**a que producto corresponde el boton**/
        //console.log(evento.target.parentNode.parentNode)
        const producto = evento.target.parentNode.parentNode
        //console.log(producto)
        leerDatosProductos(producto);
    }
}

function leerDatosProductos(item) {
    //console.log(item);
    const informacion = {
        imagen: item.querySelector('img').src,
        titulo: item.querySelector('.titulo-card').textContent,
        descripcion: item.querySelector('.descripcion').textContent,
        precio: item.querySelector('.precio') ? item.querySelector('.precio').textContent : item.querySelector('.precio-producto').textContent,
        id: item.querySelector('.agregar').getAttribute('data-id'),
        cantidad: 1,
    }
    //console.log(informacion)
    let precioProducto = parseFloat(informacion.precio.replace('$', ''));
    //console.log(productosCarrito.some(producto => producto.id === informacion.id))
    if (productosCarrito.some(producto => producto.id === informacion.id)) {
        const productos = productosCarrito.map(produ => {
            if (produ.id === informacion.id) {
                let cantidad = parseInt(produ.cantidad);
                cantidad += 1
                produ.cantidad = cantidad

                totalCompra += precioProducto;
                return produ
            } else {
                return produ;
            }
        })
        productosCarrito = [...productos]
    } else {
        //agregar el objeto al "productosCarrito"
        //productosCarrito.push(informacion)
        //console.log(productosCarrito)
        productosCarrito = [...productosCarrito, informacion]
        totalCompra += precioProducto;
    }

    console.log(productosCarrito);
    actualizarTotal();
    crearCarrito();
}

function crearCarrito() {
    borrarHTML();
    productosCarrito.forEach(producto => {
        const articulos = document.createElement('div');
        //console.log(articulos)
        articulos.innerHTML = `
        <div class="carrito-card">
            <img src="${producto.imagen}" alt="" class="carrito-imagen">
            <div class="carrito-detalle">
                <p class="titulo-producto">${producto.titulo}</p>
                <p class="precio-producto">${producto.precio}</p>
                <p class="cantidad-producto">${producto.cantidad}</p>
            </div>
            <button class="eliminar-producto" data-id="${producto.id}">
            <i class="bi bi-trash-fill"></i>
            </button>

        </div>
        `;
        contenedorCarrito.appendChild(articulos);
    })
    sincronizarLocalStorage();
    mensajeCarritoVacio();
}


function borrarHTML() {
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}

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
            while (contenedorCarrito.firstChild) {
                contenedorCarrito.removeChild(contenedorCarrito.firstChild)
            }
            productosCarrito = [];
            totalCompra = 0;
            sincronizarLocalStorage();
            actualizarTotal();
            mensajeCarritoVacio();
        }
    });
}

function removerElProducto(evento) {
    if (evento.target.classList.contains('eliminar-producto')) {
        const productoId = evento.target.getAttribute('data-id');
        const productoEliminado = productosCarrito.find(producto => producto.id === productoId);
        if (productoEliminado) {
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
                    totalCompra -= parseFloat(productoEliminado.precio.replace('$', '')) * productoEliminado.cantidad; // Restar el precio total del producto eliminado
                    productosCarrito = productosCarrito.filter(producto => producto.id !== productoId);
                    crearCarrito();
                    actualizarTotal();
                    mensajeCarritoVacio();
                }
            });
        }
    }
}



function sincronizarLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(productosCarrito))
}

//actualizar el texto del total en el HTML
function actualizarTotal() {
    precioTotalElemento.textContent = `$${totalCompra.toFixed(2)}`;
}

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

//abrir el carrito
const abrirCarrito = () => {
    carrito.classList.add('active');
};

//cerrar el carrito
const cerrarElCarrito = () => {
    carrito.classList.remove('active');
};

listaProductos.addEventListener('click', agregarProductos);
// Asignar evento click al carrito
carritoIcono.addEventListener('click', abrirCarrito);

// Asignar evento click al botón de cierre
cerrarCarrito.addEventListener('click', cerrarElCarrito);
vaciarCarrito.addEventListener('click', limpiarCarrito);
carrito.addEventListener('click', removerElProducto);

window.addEventListener('DOMContentLoaded', () => {
    const datosLocalStorage = localStorage.getItem('carrito');
    if (datosLocalStorage !== null) {
        productosCarrito = JSON.parse(datosLocalStorage);
    }
    crearCarrito();
});