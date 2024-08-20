const productos = [
    //conjuntosLargos
    {
        id: "conjuntoBlue",
        titulo: "Conjunto Blue",
        imagen: "./img/conjuntoBlue.jpg",
        categoria: {
            nombre: "Conjuntos Largos",
            id: "conjuntosLargos",
        },
        precio: 1000
    },
    {
        id: "conjuntoGreen",
        titulo: "Conjunto Green",
        imagen: "./img/conjuntoGreen.jpg",
        categoria: {
            nombre: "Conjuntos Largos",
            id: "conjuntosLargos",
        },
        precio: 1000
    },
    {
        id: "conjuntoMaipu",
        titulo: "Conjunto Maipu",
        imagen: "./img/conjuntoMaipu.jpg",
        categoria: {
            nombre: "Conjuntos Largos",
            id: "conjuntosLargos",
        },
        precio: 1000
    },
    {
        id: "conjuntoRed",
        titulo: "Conjunto Red",
        imagen: "./img/conjuntoRed.jpg",
        categoria: {
            nombre: "Conjuntos Largos",
            id: "conjuntosLargos",
        },
        precio: 1000
    },
    /**Conjuntos Cortos */
    {
        id: "conjuntoPink",
        titulo: "Conjunto Pink",
        imagen: "./img/conjuntoPink.jpg",
        categoria: {
            nombre: "Conjuntos Cortos",
            id: "conjuntosCortos",
        },
        precio: 1000
    },
    {
        id: "conjuntoEmerald",
        titulo: "Conjunto Emerald",
        imagen: "./img/conjuntoEmerald.jpg",
        categoria: {
            nombre: "Conjuntos Cortos",
            id: "conjuntosCortos",
        },
        precio: 1000
    },
    {
        id: "conjuntoBlack",
        titulo: "Conjunto Black",
        imagen: "./img/conjuntoBlack.jpg",
        categoria: {
            nombre: "Conjuntos Cortos",
            id: "conjuntosCortos",
        },
        precio: 1000
    },
    {
        id: "conjuntoShort",
        titulo: "Conjunto Short",
        imagen: "./img/conjuntShort.jpg",
        categoria: {
            nombre: "Conjuntos Cortos",
            id: "conjuntosCortos",
        },
        precio: 1000
    },
];
//elementos HTML
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal")
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");



function cargarProductos(productosElegidos) {
    //antes de ejecutar todo esto el html debe quedar vacio
    contenedorProductos.innerHTML = "";
    //for each → para que recorra todos los productos y lo cargue en el main
    productosElegidos.forEach(producto => {
        //creamos  un elemento
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
                <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="producto-detalle">
                    <h3 class="producto-titulo">${producto.titulo}</h3>
                    <p class="producto-precio">$${producto.precio}</p>
                    <button class="producto-agregar" id="${producto.id}">Agregar</button>
                </div>
        `;

        contenedorProductos.append(div);

    })
    actualizarBotonesAgregar();
    console.log(actualizarBotonesAgregar);
}
//ejecutamos la funcion
cargarProductos(productos);

botonesCategorias.forEach(boton => {
    //queremos pasarle un evento para que al hacer click se le cambie la clase active
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        //se agrego la clase active
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productosCategorias = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.textContent = productosCategorias.categoria.nombre;
            const productoBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productoBoton);

        } else {
            tituloPrincipal.textContent = "Todos los productos"
            cargarProductos(productos);
        }


    })
})

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    })
}
//LOCALSTORAGE
let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-En-Carrito")


if(productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
}else {
    productosEnCarrito = [];
}
// const productosEnCarrito = [];


//AGREGAR AL CARRITO
function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    //buscamos el id en el array de productos
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);

    }
    actualizarNumerito()

    localStorage.setItem("productos-En-Carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.textContent = nuevoNumerito;
}