// document.addEventListener("DOMContentLoaded", () =>{

// })

//capturar lo que hay dentro del formulario
const formulario = document.querySelector("#formulario");
//4) mostramos el error
function mostrarError(msj){
    const mensajeError = document.createElement('p'); //si el comentario esta vacio se creara un elemento p con un mensaje dentro
    mensajeError.textContent = msj;
    mensajeError.classList.add("error");
    const modal = document.querySelector('#content');
    //ahora debe aparecer el mensaje
    modal.appendChild(mensajeError)
}
//por buena practica la funcion siempre antes del llamado
//2) para evitar que se recargue la pagina → recordamos que todo evento nos regala un objeto (evt)
function agregarComentario(evt){
    evt.preventDefault();//lo que sucede con este evento es que envia el comentario y no se envia la recarga //EVITA EL COMPORTAMIENTO PREDETERMINADO
    console.log("Agregaste un comentario"); //1)en consola aparece y desaparece al instante en este caso occure esto porque siempre que se le hace un submit a un formulario se dirije hacia el action y en el caso de que no haya nada recarga la pagina
//AGREMOS EL COMENTARIO 1) SABER QUE ES LO QUE ESCRIBIO EL USUARIO
    const comentario = document.querySelector("#comentario").value;
    //console.log(comentario); //me va a devolver el textarea no lo que escribio el usuario para eso hacemos uso del value
    //3)queremos saber si escribio alguien
    if (comentario === ""){
        //alert("El comentario no puede ser vacio")→ esto esta mal
        //forma correcta
        mostrarError("El comentario no puede ser vacio")
    }
}

//escuchamos el evento submit y al escucharlo vamos a reaacionar en este caso agregar comentario, siempre recibe una función
formulario.addEventListener('submit', agregarComentario); //el evento submit es el evento que se produce en los formularios //se va a emepzar a escuchar cuando se hace click en el formulario
