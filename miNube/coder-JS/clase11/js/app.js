console.log(localStorage);
                       //clave         //valor
localStorage.setItem('bienvenida', "Hola coders"); //se la puede utilizar para guardar algo en el browser

//sessionStorage.setItem('bienvenida',"Hola coders"); //la diferencia entre local y sesion es que local resiste a reinicios del sistema operativo y almacena la informacion mientras que sesion lo mantiene mientras yo persista en la aplicacion
// localStorage.setItem('numero',5);
// localStorage.setItem('booleano', true);
// localStorage.setItem('alumnos', ["Maria", "Marta", "Mateo"]);
// localStorage.setItem('producto', {nombre: "Fideos", precio: 1000});
// localStorage.setItem('basura', "No sirve" );

console.log(localStorage.length); //cuantas cosas tengo guardadas
localStorage.removeItem('basura');

for (let i = 0; i < localStorage.length; i++){ //mostrara todas las claves
    let clave = localStorage.key(i);
    console.log(clave)
    console.log(`la clave es ${clave}`);
    console.log(`El valor es ${localStorage.getItem(clave)}`)
}
