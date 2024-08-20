let texto = "prueba de texto"

console.log(texto)
texto = 'prueba de texto 2'
console.log(texto)
texto = `prueba de texto 3` //template string
console.log(texto)

//ESTO RESULTA MUY ENGORROSO
let nombreClase = "bases JS"
let temasClase = "Temas de la clase "+nombreClase+": \n\n\t1)let y const\n\t2)funciones\n\t3)scopes"
console.log(temasClase)
console.log()
//SE LO SOLUCIONA UTILIZANDO template
 temasClase = `Temas de la clase ${nombreClase}:
 1) funciones
 2) scopes
 3) let y const`
 console.log(temasClase)
 console.log()
