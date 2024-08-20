/**PETICIONES HTTP */
//POST → Enviar informacion 


//GET → Obtener informacion

//PUT → Crear o modificar algun recurso del servidor

//DELETE → Para eliminar algun recurso del servidor
const boton = document.querySelector('#btn-texto');

// window.addEventListener('DOMContentLoaded', () => {
//     fetch('notas.txt')
//     .then((respuesta) => {
//         //console.log(respuesta);
//         return respuesta.text();
//     })
//     .then((texto) => {
//         console.log(texto);
//     })
//     .catch()
//     .finally()
// })

boton.addEventListener('click', ()=>{
    fetch('notas.txt')
    .then((respuesta) => {
        //console.log(respuesta);
        return respuesta.text();
    })
    .then((texto) => {
        console.log(texto);
    })
    .catch()
    .finally()
});
