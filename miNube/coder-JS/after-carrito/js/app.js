//1
let articulosCarrito = [];

//3
//Capturar lista de productos del HTML
const listaProductos = document.querySelector("#lista-productos");
//4
const contenedorCarrito = document.querySelector("#lista-carrito tbody");

//33→vaciar el carrito
const vaciarCarrito = document.querySelector("#vaciar-carrito");

//36
const carrito = document.querySelector("#carrito")

//2
function agregarProducto(evt){ //6
    //7 → comprobar si dentro de ese evento existe la clase agregar-carrito
    //console.log(evt.target.classList.contains("agregar-carrito"))
    //9 hacemos un prevent defaul para que no se recargue la pagina
    evt.preventDefault();
    //8 → Preguntamos si existe la clase y si si solo reacciona al ancla (boton)
    if(evt.target.classList.contains("agregar-carrito")){
        //console.log("SI ESTA")

        //9 → al hacer click en el voton queremos capturar toda la informacion del producto
        //console.log(evt.target.parentElement.parentElement)
        const producto = evt.target.parentElement.parentElement
        //console.log(producto);

        //10 lo que estamos capturando es HTML y eso no nos sirve dentro de JS para eso debemos hacer
        leerDatosProductos(producto);
    }

}

//11 → creamos la funcion leerDatosProductos
function leerDatosProductos(item){
    //console.log(item);
    //15→ queremos leer el id del a
    //console.log(item.querySelector('a').getAttribute('data-id'));
    //12 → creamos una variable donde se va almacenar un objeto con los datos del producto
    const infoProducto = {
        imagen: item.querySelector("img").src,
        titulo: item.querySelector("h4").textContent,
        precio: item.querySelector('.precio span').textContent,
        id: item.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //console.log(infoProducto);
    //14 y 16→ queremos que no se repitan los elementos del objeto 
    //16 esto nos va a decir si el producto esta o no agregado al array y nos va a devolver un false o true
    //17 primero preguntamos si esta o no esta
    if(articulosCarrito.some(product => product.id === infoProducto.id)){
        //18→ en el caso de que el producto se encuentre en el carrito queremos que la cantidad declarada en 1 tenemos que agregarle uno mas //un map porque queremos pasar por todos los productos que se encuentren
        const productos = articulosCarrito.map( prod => {
            //19→ esto va a ir pasando por cada uno de los producrtos si no esta agregado salta y si si a ese producto le suma la cantidad 
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
        // 20 → quiero que articulos productos sea igua a ( const productos) y quiero poner todos los productos qe esten dentro de la variable
        articulosCarrito = [...productos]
    }else{
        //21→ en el caso de que el some no de positivo de falso va a saltar 
        //13 → necesitamos meter el objeto(infoproducto) dentro del carrito de compras
            //articulosCarrito.push(infoProducto);
            //console.log(articulosCarrito)
            //22→ podemos usar el push pero no lo vamos a hacer porque necesitamos agregar todo lo que ya tenemos mas infodelproducto
            articulosCarrito = [...articulosCarrito, infoProducto]
        }
        //console.log(articulosCarrito)
        //23 ejecutamos la funcion
        dibujarCarritoHTML();
}
//24 en esta funcion se va a ir creando el carrito
function dibujarCarritoHTML(){
    //27 → para que cada vez que se agregue un producto nuevo se borre el array anterior y agregue el nuevo
    limpiarHTML();
    //25→ recorremos articulos carrito a traves de un foreach
                            //por cada producto 
    articulosCarrito.forEach(producto => {
                              //adrentro de tbody queremos meter cada producto que sera un tr
        const fila = document.createElement('tr')
        //fila es el tr //aun no se esta dibujando en ningun lado 
        fila.innerHTML = `
        <td><img src="${producto.imagen}" width="100"></td>
        <td>${producto.titulo}</td>
        <td>${producto.precio}</td>
        <td>${producto.cantidad}</td>
        <td><a href="#" class="borrar-producto" data-id="${producto.id}">X</a></td>
    `;
    //26 para que se dibuje debemos agregarlo a contenedor carrito //se van a ir multiplicando cada vez que se vayan agregando al carrito, el problema es que cada vez que viene a dibujar el carrito no borra lo que esta en el html para eso vamos a necesitar un limpiar carrito
    contenedorCarrito.appendChild(fila)
    
    })
    //30→ cada vez que dinujo el carrito voy a ser un sincronizar storage pero se esta guardando y al recargar la pagina sigue sin almacenar lo guardado
    sincronizarStorage();
}
//28 creamos la funcion para limpiar el carrito
function limpiarHTML() {
    //preguntamos mientras contenedor carrito tenga un firstchild(un hujo, una fila un tr) Hagarramos el contenedor carrito y vamos a remover el primer hijo  agregar un nuevo
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    } 

}

//35 vamos a crear otra funcion que limpie carrito pero que tenga otra funcionalidad
function limpiarCarrito() {
    //preguntamos mientras contenedor carrito tenga un firstchild(un hujo, una fila un tr) Hagarramos el contenedor carrito y vamos a remover el primer hijo  agregar un nuevo
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    } 
    articulosCarrito = [];
    sincronizarStorage();
}
//29→ ahora los productos en el carrito se estan guardando correctamente pero al recargar la pagina desaparecen por lo que debemos guardar todo esto en el STORAGE
function sincronizarStorage(){
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito))
}
//38 eliminar producto
function eliminarProducto(evt){
    evt.preventDefault();
    if(evt.target.classList.contains('borrar-producto')){
        //39 acceso al tr de la x
        const producto = evt.target.parentElement.parentElement
        const productoId = producto.querySelector('a').getAttribute('data-id')
        //40eliminar el id // va a fitrar todos menos los que no coincidan con el id
        articulosCarrito = articulosCarrito.filter( prod => prod.id !== productoId)
        dibujarCarritoHTML();
    }

}
//5
//cada vez que se haga click en el producto se va a ejecutar el evento
listaProductos.addEventListener("click", agregarProducto);
//34
vaciarCarrito.addEventListener("click", limpiarCarrito);
//37
carrito.addEventListener("click", eliminarProducto);
//31→ cuando cargamos la pagina queremos leer lo guardado
window.addEventListener('DOMContentLoaded', () => {
    //32 → lo qe esta pasando aqui es que articulos foreach al recorrer el carrito vacio esta haciendo null.foreach y aqui nos va a tirar un error por lo que necesariamente necesitamos usar los condicionales 
    articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

    dibujarCarritoHTML();
});