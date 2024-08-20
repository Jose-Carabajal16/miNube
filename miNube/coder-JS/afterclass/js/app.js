const autos = [
    {
        marca: "BMW",
        modelo: "Serie 3",
        year: 2020,
        precio: 30000,
        puertas: 4,
        color: "Blanco",
        transmision: "automatico", 
    },
    {
        marca: "Audi",
        modelo: "A4",
        year: 2018,
        precio: 25000,
        puertas: 4,
        color: "Gris",
        transmision: "automatico", 
    },
    {
        marca: "Mercedes-Benz",
        modelo: "Clase C",
        year: 2019,
        precio: 28000,
        puertas: 4,
        color: "Negro",
        transmision: "automatico", 
    },
    {
        marca: "Toyota",
        modelo: "Corolla",
        year: 2017,
        precio: 20000,
        puertas: 4,
        color: "Rojo",
        transmision: "automatico", 
    },
    {
        marca: "Ford",
        modelo: "Focus",
        year: 2016,
        precio: 18000,
        puertas: 4,
        color: "Azul",
        transmision: "manual", 
    },
    {
        marca: "Volkswagen",
        modelo: "Jetta",
        year: 2018,
        precio: 22000,
        puertas: 4,
        color: "Plata",
        transmision: "manual", 
    },
    {
        marca: "Honda",
        modelo: "Civic",
        year: 2019,
        precio: 24000,
        puertas: 4,
        color: "Blanco",
        transmision: "manual", 
    }
];

console.log(autos);
// console.log(autos[0]);
// console.log(autos[autos.length - 1]);

//Variables
let marca = prompt("Ingresar marca");
let year = Number(prompt("Ingresar año"))
const datosBusqueda = {
    marca: marca,
    year: year,
    minimo: 18000,
    maximo: 30000,
}


//presentamos los autos
function mostrarAutos(cards){
    // console.log(cards)
    cards.forEach(auto => {
        console.log("marca : " + auto.marca + " - " + "modelo : " + auto.modelo + " - " + "Año : " + auto.year + " - " +"Precio : " + auto.precio + " - " + "puertas : " +auto.puertas + " - " + "color : " + auto.color + " - " + "transmision : " + auto.transmision)
        
    });
}
//mostrarAutos(autos);//recibe los autos del array - ejecuta la funcion

//filtrar los autos por la marca
function filtrarMarca(auto){ //va a recibir un auto → no tiene relacion con el anterior
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca
    }
    return auto //me esta devolviendo todos los autos que tengan relacion con la variable "let marca = Audi"
}


function filtrarYear(auto){ //va a recibir un auto → no tiene relacion con el anterior
    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year
    }
    return auto //me esta devolviendo todos los autos que tengan relacion con la variable "let marca = Audi"
}
function precioMinimo(auto){ //va a recibir un auto → no tiene relacion con el anterior
    if(datosBusqueda.minimo){
        return auto.precio >= datosBusqueda.minimo
    }
    return auto //me esta devolviendo todos los autos que tengan relacion con la variable "let marca = Audi"
}
function precioMaximo(auto){ //va a recibir un auto → no tiene relacion con el anterior
    if(datosBusqueda.maximo){
        return auto.precio <= datosBusqueda.maximo
    }
    return auto //me esta devolviendo todos los autos que tengan relacion con la variable "let marca = Audi"
}

/*** */
function filtrarAutos(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(precioMinimo).filter(precioMaximo); //al resultado de filtrar marcas le filtramos los años
    if(resultado.length > 0){
        mostrarAutos(resultado); // si se cumple se va a mostrar la funcion function mostrarAuto → console.log
} else  {
    console.error("Sin resultado")
}
}
filtrarAutos();





