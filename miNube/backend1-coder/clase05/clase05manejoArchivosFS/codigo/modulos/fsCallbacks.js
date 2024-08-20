const fs = require('fs');
const path = require('path');

let rutaArchivo = "./archivos/archivoCallbacks.txt";
let texto2 = `El universo es una perversa inmensidad hecha de ausencia.
Uno no está en casi ninguna parte.
Sin embargo, en medio de las infinitas desolaciones hay una buena noticia: el amor.
Los Hombres Sensibles de Flores tomaban ese rumbo cuando querían explicar el cosmos. 
Y hasta los Refutadores de Leyendas tuvieron que admitir, casi sin reservas, que el amor
existe. Eso sí, nadie debe confundir el amor con la dicha. Al contrario: a veces se
piensa que amor y pena son una misma cosa. Especialmente en el barrio del Ángel Gris,
que es también el barrio del desencuentro.

Alejandro Dolina - fragmento del libro "Crónicas del Ángel Gris"`
/**FORMA ANIDADA */
//crea el archivo y lo guarda en la ruta
 fs.writeFile(rutaArchivo, texto2, error => {
     if (error) {
         console.log(`Ocurrio un error: ${error.message}`);
     }
     console.log("El archivo fue creado correctamente")
     fs.readFile(rutaArchivo, {encoding:"utf-8"}, (error, datosArchivo)=>{
         if(error){
             console.log(`Ocurrió un error: ${error.message}`)
            return
         }
         console.log(datosArchivo)

         fs.appendFile(rutaArchivo, `\n\nEditorial Planeta`, error=>{
             if(error){
                 console.log(`Ocurrió un error: ${error.message}`)
                 return
             } 
             console.log("El archivo fue modificado con exito!") 
         })
     })
 })

// /**FORMA DESANIDADA */
// const crearArchivo = (rutaArchivo, texto2) => {
//     const dir = path.dirname(rutaArchivo);
    
//     // Crear los directorios necesarios si no existen
//     fs.mkdirSync(dir, { recursive: true });
    
//     fs.writeFile(rutaArchivo, texto2, error => {
//         if (error) {
//             console.log(`Ocurrió un error: ${error.message}`);
//         } else {
//             console.log("El archivo fue creado correctamente");
//             leerArchivo(rutaArchivo);
//         }
//     });
// };

// const leerArchivo = (rutaArchivo) => {
//     fs.readFile(rutaArchivo, { encoding: "utf-8" }, (error, datosArchivo) => {
//         if (error) {
//             console.log(`Ocurrió un error: ${error.message}`);
//         } else {
//             console.log(datosArchivo);
//             modificarArchivo(rutaArchivo);
//         }
//     });
// };

// const modificarArchivo = (rutaArchivo) => {
//     fs.appendFile(rutaArchivo, `\n\nEditorial Planeta`, error => {
//         if (error) {
//             console.log(`Ocurrió un error: ${error.message}`);
//         } else {
//             console.log("El archivo fue modificado con éxito!");
//         }
//     });
// };

// // Ejemplo de uso
// crearArchivo("./ruta/del/archivo.txt", "Texto inicial del archivo");

