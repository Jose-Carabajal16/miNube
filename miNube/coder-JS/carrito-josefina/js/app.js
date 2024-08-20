//1
let productos = [];
//capturamos los productos de html
//2
const listaProductos = document.querySelector('#cards-container')


//funciones
//3
function agregarProductos(evento){
    //console.log(evento.target.classList.contains('agregar-carrito'));
    //5
    if(evento.target.classList.contains('agregar-carrito')){
        //console.log(evento.target.parentElement.parentElement)
        const producto = evento.target.parentElement.parentElement
        
        datosProductos(producto);
    }
}

//6
function datosProductos(item){
    //console.log(item.querySelector('a').getAttribute('data-id'));

    //7
    const infoProducto = {
        imagen: item.querySelector("img").src,
        titulo: item.querySelector(".card-title").textContent,
        descripcion: item.querySelector(".card-text").textContent,
        precio: item.querySelector('.card-precio').textContent,
        id: item.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    //console.log(infoProducto)
    //8
    if(productos.some(product => product.id === infoProducto.id)){
        //en el caso de que el producto se encuentre en el carrito queremos que la cantidad declarada en 1 tenemos que agregarle uno mas //un map porque queremos pasar por todos los productos que se encuentren
        const productosCarrito = productos.map( prod => {
            //esto va a ir pasando por cada uno de los producrtos si no esta agregado salta y si si a ese producto le suma la cantidad 
            if (prod.id === infoProducto.id){
                               //necesitamos que sea un numero por eso el parseInt
                let cantidad = parseInt(prod.cantidad)
                cantidad += 1
                prod.cantidad = cantidad
                return prod
            } else {
                return prod
            }

        })
        productos = [...productosCarrito]
    }else{
            productos = [...productos, infoProducto]
        }
        console.log(productos)
        dibujarCarritoHTML();
}
//4
listaProductos.addEventListener('click', agregarProductos);