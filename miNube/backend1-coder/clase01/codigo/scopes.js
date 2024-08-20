//es el ambito o alcance de una variable 
const x = "declarada en el scope local"
function ejemplo(){
    //x solo se puede usar en ejemplo, no s ela puede usar poºr fuera de la funcion
    //const x = "declarada en el scope local"
    console.log(x)
}
ejemplo() // esto no lanza error
console.log(x) //existe aca afuera tambien

