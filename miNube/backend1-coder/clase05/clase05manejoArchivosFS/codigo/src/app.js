//console.log("Hola mundo")
const moment = require("moment")

let fecha = moment()
console.log(fecha)
console.log(fecha.add(12, "day"))

let fechaNac=moment("2000-05-08")
if(!fechaNac.isValid()){
    console.log(`Fecha invalida`)
}

console.log(`Ustede ha nacido hace ${moment().diff(fechaNac, "year")} años`)
console.log(`Ustede ha nacido hace ${moment().diff(fechaNac, "days")} dias`)
console.log(`Ustede ha nacido hace ${moment().diff(fechaNac, "seconds")} segundos`)