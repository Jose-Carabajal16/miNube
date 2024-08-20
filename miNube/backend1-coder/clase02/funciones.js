const mostrarLista = (lista=[]) => {
    if(lista.length === 0){
        console.log("la lista no contiene elementos")
        return
    }
    lista.forEach(elemento => {
        console.log(elemento)
    })

    console.log(`la longitud de la lista es de ${lista.length}`)
};
mostrarLista([])
mostrarLista([1,2,3,4,5,6])
mostrarLista([1,"a",3,false,5,true])