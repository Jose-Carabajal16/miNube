const fs = require('fs');
let rutaArchivo ="./archivos/archivoSincronos.txt"
let texto1=`La división internacional del trabajo consiste en que unos países se especializan
en ganar y otros en perder. Nuestra comarca del mundo, que hoy llamamos América Latina, fue
precoz: se especializó en perder desde los remotos tiempos en que los europeos del Renacimiento
se abalanzaron a travéz del mar y le hundieron los dientes en la garganta. Pasaron los siglos
y América Latina perfeccionó sus funciones.

Eduardo Galeano - Capítulo introductorio de "Las venas abiertas de Latinoamérica"`


//→ lo que se hizo fue crear en la carpeta archivo, un archivo con el contenido que tiene la variable "texto1"
fs.writeFileSync(rutaArchivo, texto1)

//Ahora queremos recuperar el contenido que hay en el archivo
let datosArchivo = fs.readFileSync(rutaArchivo, {encoding:"utf-8"})
console.log(datosArchivo)

//agregar informacion al final del archivo
fs.appendFileSync(rutaArchivo, `\n\n\tEditorial Sudamericana`)//primer argumento siempre la ruta hacia el archivo, segundo argumento lo que se quiere agregar

//eliminar el archivo con fs.unlinkSync(rutaArchivo)

//verificar si existe el archivo
if(fs.existsSync(rutaArchivo)){
    console.log(`${rutaArchivo} EXISTE`)
} else{
    console.log("La ruta no existe")
}