const botonSweet = document.querySelector("#sweetalert")

botonSweet.addEventListener('click', () => {
    Swal.fire({
        title: 'Borrar',
        text: '¿Estas seguro que quieres borrar este elemento?',
        icon: 'question',
        confirmButtonText: 'Aceptar',
        iconHtml: '<i class="bi bi-trash3-fill"></i>'
      })
    })

