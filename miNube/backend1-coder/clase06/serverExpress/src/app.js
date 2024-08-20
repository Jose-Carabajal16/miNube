//1ºpaso
const express = require('express');
//4ºpaso exportamos el json
const { heroes } = require("./data/heroes.js")

const PORT = 8081
const app = express()
//3ºpaso
app.get("/", (req, res) => {
    res.send("Pagina de inicio del servidor express (sin modulos http)")
})
app.get("/heroes", (req, res) => {
    res.send(heroes)
})
//2ºpaso
app.listen(PORT, ()=> console.log(`Servidor corriendo en puerto: ${PORT}`));